'use client';

import useCartStore from '@/store/useCartStore';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';

const RemoveFromCartButton = ({ productId }: { productId: string }) => {
  const { removeFromCart } = useCartStore();
  return (
    <Button
      onClick={() => removeFromCart(productId)}
      variant={'ghost'}
      className='cursor-pointer capitalize'>
      <Trash2 /> remove
    </Button>
  );
};

export default RemoveFromCartButton;
