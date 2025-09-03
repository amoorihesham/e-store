import { Stripe } from 'stripe';

if (!process.env.STRIPE_SECRET!) {
  throw new Error('No Stripe Secret');
}

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: '2025-08-27.basil',
});

export default stripe;
