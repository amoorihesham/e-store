'use client';
import { formatPrice } from '@/lib/utils';
import useCartStore from '@/store/useCartStore';
import React from 'react';

const CartTotalPrice = () => {
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  return <span className='text-xl font-bold text-primary'>{formatPrice(totalPrice)}</span>;
};

export default CartTotalPrice;
