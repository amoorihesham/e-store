'use client';
import Image from 'next/image';
import useCartStore from '@/store/useCartStore';
import { currencyFormatter } from '@/lib/utils';
import { Button } from './ui/button';
import ClearCartButton from './ClearCartButton';
import RemoveFromCartButton from './RemoveFromCartButton';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import createStripeCheckoutSession, { Metadata } from '@/actions/stripe';

const CartItemsList = () => {
  const { isSignedIn, user } = useUser();
  const { items } = useCartStore();
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? 'unknown',
        customerEmail: user?.emailAddresses[0].emailAddress ?? 'unknown',
        clerkUserId: user!.id,
      };

      const checkoutUrl = await createStripeCheckoutSession(items, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!items.length && (
        <div className='flex items-center justify-center flex-col'>
          <Image
            src={'/images/notFound.svg'}
            alt={'Not Found Image'}
            width={250}
            height={200}
            objectFit='contain'
          />
          <h6 className='text-2xl font-light'>Your cart is empty</h6>
        </div>
      )}
      {!!items.length && (
        <div className='relative md:flex md:justify-between md:gap-x-10 md:items-start'>
          <div className='flex-1 mt-5 '>
            {items.map((item) => (
              <div
                key={item._id}
                className=' shadow-sm p-3 rounded-md mb-10 text-sm hover:shadow-md transition-shadow duration-500 md:flex md:justify-between md:items-center md:gap-x-20'>
                <div className='flex items-center '>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                  <span className='text-sm'>{item.name}</span>
                </div>
                <div className='my-3 md:space-y-0 md:flex md:flex-1 md:justify-between  '>
                  <span className='font-semibold text-sm text-muted-foreground flex items-center md:flex-col gap-2 md:gap-0'>
                    Price
                    <span className='text-black'>{currencyFormatter(item.base_price)}</span>
                  </span>
                  <span className='font-semibold text-sm text-muted-foreground flex items-center md:flex-col md:gap-0 gap-2'>
                    QTY <span className='text-primaryRed'>{item.quantity}</span>
                  </span>
                  <span className='font-semibold text-muted-foreground text-sm flex items-center md:flex-col gap-2 md:gap-0'>
                    Subtotal
                    <span className='text-black'>{currencyFormatter(item.quantity * item.base_price)}</span>
                  </span>
                </div>
                <div className=''>
                  <RemoveFromCartButton productId={item._id} />
                </div>
              </div>
            ))}
            <ClearCartButton />
          </div>

          <div className='rounded-md min-w-[250px] sticky bottom-0 left-0 md:top-0 md:right-0 p-5 border space-y-5 bg-white mt-10 md:mt-0'>
            <div>
              <p className='flex items-center justify-between text-sm font-semibold text-muted-foreground capitalize'>
                Subtotal: <span className='text-black'>{currencyFormatter(totalPrice)}</span>
              </p>
            </div>
            <hr className='border-gray-100' />
            <div className='space-y-3'>
              <p className='flex items-center justify-between text-sm font-semibold text-muted-foreground capitalize'>
                Total items: <span className='text-black'>{items.length}</span>
              </p>
              <p className='flex items-center justify-between text-sm font-semibold text-muted-foreground capitalize'>
                Total: <span className='text-black'>{currencyFormatter(totalPrice)}</span>
              </p>
            </div>
            <Button
              disabled={isLoading}
              onClick={handleCheckout}
              className='w-full bg-primaryRed hover:bg-red-700 transition-colors duration-300'>
              {isLoading ? 'Processing' : 'Checkout'}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItemsList;
