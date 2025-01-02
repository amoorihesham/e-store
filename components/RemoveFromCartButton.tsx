'use client';

import useCartStore from '@/store/useCartStore';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const RemoveFromCartButton = ({ productId }: { productId: string }) => {
  const { removeFromCart } = useCartStore();
  return (
    <Button
      className='bg-primaryRed hover:bg-red-700 transition-colors duration-300'
      onClick={async () => {
        await removeFromCart(productId);
        toast({
          title: 'Item Removed from cart',
        });
      }}>
      <Trash className='w-5 h-5' />
    </Button>
  );
};

export default RemoveFromCartButton;
