'use client';

import useCartStore from '@/store/useCartStore';
import { Button } from './ui/button';

const ClearCartButton = () => {
  const { clearCart } = useCartStore();
  return (
    <Button
      className='bg-primaryRed hover:bg-red-700 transition-colors duration-300'
      onClick={clearCart}>
      Clear Cart
    </Button>
  );
};

export default ClearCartButton;
