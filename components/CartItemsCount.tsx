'use client';
import { cn } from '@/lib/utils';
import useCartStore from '@/store/useCartStore';
import React from 'react';

const CartItemsCount = ({ className }: { className?: string }) => {
  const { items } = useCartStore();
  return <span className={cn(className)}>{items.length}</span>;
};

export default CartItemsCount;
