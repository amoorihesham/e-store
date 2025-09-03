'use client';

import useCartStore from '@/store/useCartStore';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';

const ClearCartButton = () => {
  const { clearCart, items } = useCartStore();
  return (
    <Button
      disabled={items.length ? false : true}
      variant={'destructive'}
      className='cursor-pointer py-6 px-12 text-lg font-semibold absolute right-4 bottom-4'
      onClick={clearCart}>
      <Trash className='size-5' />
      Clear
    </Button>
  );
};

export default ClearCartButton;
