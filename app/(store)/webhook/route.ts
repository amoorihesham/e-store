import { Metadata } from '@/actions/stripe';
import stripe from '@/lib/stripe';
import { backendClient } from '@/sanity/lib/backendClient';

import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No Stripe Signature' }, { status: 400 });
  }
  const webhooksSecret = process.env.STRIPE_WEBHOOKS_SECRET;
  if (!webhooksSecret) {
    console.log('Stripe Webhook Secret Not Set');
    return NextResponse.json({ error: 'Stripe Webhook Secret Not Set' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhooksSecret);
  } catch (error) {
    console.log('Webhook Error', error);
    return NextResponse.json({ error: `Webhook Error:${error}` }, { status: 400 });
  }
  console.log(event.type);
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      await createSanityOrder(session);
    } catch (error) {
      console.log('Error Creating order in sanity: ', error);
      NextResponse.json({ error: `Error While Creating Sanity Order: ${error}` });
    }
  }

  return NextResponse.json({ received: true });
}

async function createSanityOrder(session: Stripe.Checkout.Session) {
  const { id, currency, amount_total, metadata, payment_intent, customer } = session;

  const { clerkUserId, customerEmail, customerName, orderNumber } = metadata as Metadata;

  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(id, {
    expand: ['data.price.product'], // Ensure product metadata is expanded
  });

  const sanityProducts = lineItemsWithProduct.data
    .map((item) => {
      const productId = (item.price?.product as Stripe.Product)?.metadata?.id; // Metadata access
      if (!productId) {
        console.error('Missing product ID in metadata:', item);
        return null;
      }

      return {
        _key: crypto.randomUUID(),
        product: {
          _type: 'reference',
          _ref: productId, // Use metadata.id to reference Sanity products
        },
        quantity: item.quantity || 0,
      };
    })
    .filter(Boolean); // Remove null entries

  console.log('Sanity Products Before Creation:', sanityProducts);

  const createdOrder = await backendClient.create({
    _type: 'order',
    orderNumber,
    stripeCheckoutSessionId: id,
    stripePaymentIntentId: payment_intent,
    stripeCustomerId: customer,
    customerName,
    customerEmail,
    clerkUserId,
    currency,
    totalPrice: amount_total ? amount_total / 100 : 0,
    status: 'paid',
    orderDate: new Date().toISOString(),
    products: sanityProducts,
  });

  return createdOrder;
}
