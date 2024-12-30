'use client';

import useCartStore from '@/store/useCartStore';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';

const RemoveFromCartButton = ({ productId }: { productId: string }) => {
  const { removeFromCart } = useCartStore();
  return (
    <Button
      className='bg-primaryRed hover:bg-red-700 transition-colors duration-300'
      onClick={() => removeFromCart(productId)}>
      <Trash className='w-5 h-5' />
    </Button>
  );
};

export default RemoveFromCartButton;
