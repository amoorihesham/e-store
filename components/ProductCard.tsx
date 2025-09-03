import { formatPrice, calculateDiscountedPrice } from '@/lib/utils';
import { GET_PRODUCT_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Info, ShoppingBasket, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import AddToCartProductCard from './buttons/AddToCartProductCard';

const ProductCard = ({ product }: { product: GET_PRODUCT_QUERYResult }) => {
  return (
    <Card className='py-0 pb-6 group max-h-[412px]'>
      <CardHeader className='p-0 h-72 relative overflow-hidden'>
        <Image
          src={urlFor(product!.image!).url()}
          alt={product!.image?.alt || 'Product Image'}
          fill
          className='object-contain group-hover:scale-110 transition-transform duration-500'
        />
        <div className='flex items-center justify-center flex-col gap-4 absolute w-14 h-full bg-foreground/40 top-0 -left-[60px] group-hover:left-0 transition-all duration-500'>
          <Button
            variant={'ghost'}
            size={'icon'}
            className='bg-background'>
            <Link href={`/products/${product?.slug?.current}`}>
              <Info />
            </Link>
          </Button>
          <AddToCartProductCard product={product} />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='text-xl mb-2'>{product!.name}</CardTitle>

        <div className='flex items-center gap-5 mb-2'>
          <p className='text-primary font-bold text-3xl'>
            {formatPrice(calculateDiscountedPrice(product!.base_price!, product!.discount_amount ?? 0))}
          </p>
          <p className='text-destructive line-through text-lg'>{formatPrice(product!.base_price!)}</p>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex items-center'>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                fill='gold'
                color='gold'
                size={20}
              />
            ))}
          </div>
          <span className='text-muted-foreground text-sm'>(88)</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
