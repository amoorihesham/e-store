'use client';

import { Minus, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { cartItem } from '@/store/useCartStore';
import React, { SetStateAction } from 'react';

type UpdateCartQuantityProps = {
  productDetails: cartItem;
  setProductDetails: React.Dispatch<SetStateAction<cartItem>>;
};

const UpdateCartQuantity = ({ productDetails, setProductDetails }: UpdateCartQuantityProps) => {
  return (
    <div className='flex items-center gap-3'>
      <Button
        variant='outline'
        size='icon'
        disabled={productDetails.quantity === 1}
        onClick={() => setProductDetails((prev) => ({ ...prev, quantity: prev.quantity - 1 }))}>
        <Minus size={25} />
      </Button>
      <p className='font-semibold'>{productDetails.quantity}</p>
      <Button
        className='bg-primaryRed hover:bg-red-700 transition-colors duration-300'
        size='icon'
        onClick={() => setProductDetails((prev) => ({ ...prev, quantity: prev.quantity + 1 }))}>
        <Plus size={25} />
      </Button>
    </div>
  );
};

export default UpdateCartQuantity;
