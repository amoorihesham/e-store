import { calculatePriceAfterDiscount, currencyFormatter } from '@/lib/utils';
import { ProductCardType } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: ProductCardType }) => {
  return (
    <Link
      href={`/product/${product.slug?.current}`}
      key={product._id}
      className=' rounded-md overflow-hidden hover:shadow-md transition-shadow duration-300 group'>
      <div className='overflow-hidden bg-gray-100 flex items-center justify-center py-3'>
        <Image
          src={urlFor(product.image?.asset?._ref as string).url()}
          alt={product.image?.alt as string}
          width={200}
          height={400}
          className='object-contain  group-hover:scale-110 transition-transform duration-500 '
        />
      </div>
      <div className='mt-3 space-y-3 px-3 py-3'>
        <h1 className='font-bold text-sm'>{product.name}</h1>
        <div className='flex items-center gap-5'>
          <p className='text-primaryRed font-semibold  text-sm'>{currencyFormatter(calculatePriceAfterDiscount(product.base_price!, product.discount_amount!))}</p>
          <p className='text-muted-foreground line-through text-xs'>${product.base_price}</p>
        </div>
        <div className='flex items-center gap-5'>
          <div className='flex items-center'>
            <Star
              fill='gold'
              color='gold'
              size={20}
            />
            <Star
              fill='gold'
              color='gold'
              size={20}
            />
            <Star
              fill='gold'
              color='gold'
              size={20}
            />
            <Star
              fill='gold'
              color='gold'
              size={20}
            />
            <Star
              fill='gold'
              color='gold'
              size={20}
            />
          </div>
          <span className='text-muted-foreground text-sm'>(88)</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
