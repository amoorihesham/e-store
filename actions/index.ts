import { cartItem } from '@/store/useCartStore';
import { getLoggedInUser } from './auth';
import createStripeCheckoutSession, { Metadata } from './stripe';

export const CreateCheckout = async (items: cartItem[]) => {
  const user = await getLoggedInUser();
  if (!user) return { success: false, error: 'NO_ACTIVE_SESSION', message: 'No logged-in user, Please login to proceed.' };

  const orderMetadata: Metadata = {
    orderNumber: crypto.randomUUID(),
    clerkUserId: user.id,
    customerEmail: user.emailAddresses[0].emailAddress,
    customerName: user.fullName ?? 'unknown',
  };

  try {
    const checkoutUrl = await createStripeCheckoutSession(items, orderMetadata);
    return { success: true, message: 'Checkout url created successfully', checkout_url: checkoutUrl };
  } catch (error) {
    console.log('ERROR_ON_CREATE_CHECKOUT_ACTION ==>', error);
    return { success: false, error: 'ERROR_CREATE_STRIPE_CHECKOUT_URL', message: 'Error while creating stripe checkout url.' };
  }
};
