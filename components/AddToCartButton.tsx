'use client';

import useCartStore, { cartItem } from '@/store/useCartStore';
import { Button } from './ui/button';
import { GET_PRODUCT_QUERYResult } from '@/sanity.types';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { calculatePriceAfterDiscount } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import UpdateCartQuantity from './UpdateCartQuantity';
import { useToast } from '@/hooks/use-toast';
import { useUser } from '@clerk/nextjs';

const AddToCartButton = ({ product }: { product: GET_PRODUCT_QUERYResult }) => {
  const price = product!.has_discount ? calculatePriceAfterDiscount(product!.base_price!, product!.discount_amount!) : product!.base_price;
  const [productDetails, setProductDetails] = useState<cartItem>({
    _id: product!._id,
    base_price: price!,
    quantity: 1,
    name: product!.name!,
    image: urlFor(product!.image!.asset!._ref!).url(),
  });
  const { isSignedIn } = useUser();
  const { addToCart } = useCartStore();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    if (!isSignedIn) {
      toast({
        title: 'Error',
        description: 'You need to be signed in to add items to the cart',
        duration: 2000,
        variant: 'destructive',
      });
      return;
    }

    await addToCart(productDetails);
    toast({
      title: 'Item added to cart',
      description: productDetails.name,
      type: 'background',
      duration: 2000,
      variant: 'default',
    });
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <Button
          size='icon'
          variant='outline'>
          <Heart size={25} />
        </Button>
        <UpdateCartQuantity
          productDetails={productDetails}
          setProductDetails={setProductDetails}
        />
      </div>
      <div>
        <Button
          className='bg-primaryRed hover:bg-red-700 transition-colors duration-300 w-full'
          onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </div>
    </>
  );
};

export default AddToCartButton;
