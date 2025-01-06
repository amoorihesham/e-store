'use server';
import stripe from '@/lib/stripe';
import { urlFor } from '@/sanity/lib/image';
import { cartItem } from '@/store/useCartStore';

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

// const successUrl = `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`}`;
// const successUrl = `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}`;

export default async function createStripeCheckoutSession(items: cartItem[], metadata: Metadata) {
  try {
    const isItemsDoesntHavePrice = items.filter((item) => !item.base_price);
    if (isItemsDoesntHavePrice.length > 0) {
      throw new Error(`Some Items Don't Have Price`);
    }

    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });
    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_creation: customerId ? undefined : 'always',
      customer_email: !customerId ? metadata.customerEmail : undefined,
      metadata,
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: `${process.env.VERCEL_URL ? `https://estoreapp-sage.vercel.app/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}` : `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`}`,
      cancel_url: `${process.env.VERCEL_URL ? `https://estoreapp-sage.vercel.app/cart` : `http://localhost:3000/cart`}`,
      line_items: items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(item.base_price! * 100),
          product_data: {
            name: item.name || 'unnamed product',
            description: item._id,
            metadata: {
              id: item._id,
            },
            images: item.image ? [urlFor(item.image).url()] : undefined,
          },
        },
      })),
    });

    return session.url;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
