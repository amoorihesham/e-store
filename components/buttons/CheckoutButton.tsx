'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Loader, Save } from 'lucide-react';
import useCartStore from '@/store/useCartStore';
import { CreateCheckout } from '@/actions';
import { toast } from '@/hooks/use-toast';

const CheckoutButton = () => {
  const { items } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const response = await CreateCheckout(items);
    console.log('HERE');
    if (!response.success) return toast({ variant: 'destructive', title: response.error, description: response.message });

    window.location.href = response.checkout_url!;
    setIsLoading(false);
  };

  return (
    <Button
      disabled={isLoading}
      className='w-full py-6 capitalize text-lg font-semibold cursor-pointer'
      onClick={handleClick}>
      {isLoading ? (
        <>
          <Loader /> checking out...
        </>
      ) : (
        <>
          <Save /> checkout now
        </>
      )}
    </Button>
  );
};

export default CheckoutButton;
