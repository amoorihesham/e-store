'use client';
import { GET_PRODUCT_QUERYResult } from '@/sanity.types';
import useCartStore from '@/store/useCartStore';
import React from 'react';
import { Button } from '../ui/button';
import { ShoppingBasket } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';

const AddToCartProductCard = ({ product }: { product: GET_PRODUCT_QUERYResult }) => {
  const { addToCart } = useCartStore();
  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      className='bg-background cursor-pointer'
      onClick={() =>
        addToCart({
          _id: product?._id!,
          base_price: product?.base_price!,
          image: urlFor(product?.image!).url()!,
          name: product?.name!,
          quantity: 1,
        })
      }>
      <ShoppingBasket />
    </Button>
  );
};

export default AddToCartProductCard;
