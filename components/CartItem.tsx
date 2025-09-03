'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { Heart, Minus, Plus } from 'lucide-react';
import { cartItem } from '@/store/useCartStore';
import { formatPrice } from '@/lib/utils';
import RemoveFromCartButton from './RemoveFromCartButton';
import { urlFor } from '@/sanity/lib/image';

const CartItem = ({ _id, name, image, base_price, quantity }: cartItem) => {
  return (
    <div className='flex items-start gap-4 border-b pb-6 border-border/40'>
      <div>
        <Image
          src={urlFor(image).url()}
          alt={`image for ${name} product`}
          width={122}
          height={40}
        />
      </div>
      <div className='flex-1 flex items-start justify-between'>
        <div>
          <span className='text-sm text-muted-foreground uppercase  block'>brand</span>
          <h1 className='text-xl font-bold mb-2'>{name}</h1>
          <span className='block capitalize text-primary mb-2'>in stock</span>
          <div className='flex items-center gap-x-2'>
            <RemoveFromCartButton productId={_id} />
            <Button
              variant={'ghost'}
              className='cursor-pointer capitalize'>
              <Heart /> save for later
            </Button>
          </div>
        </div>
        <div className='border rounded-xs flex items-center gap-x-3 overflow-hidden'>
          <Button
            variant={'ghost'}
            className='cursor-pointer transition-colors duration-300'>
            <Plus />
          </Button>
          <span>1</span>
          <Button
            variant={'ghost'}
            className='cursor-pointer transition-colors duration-300'>
            <Minus />
          </Button>
        </div>
        <div>
          <p className='text-xl font-bold'>{formatPrice(base_price * quantity)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
