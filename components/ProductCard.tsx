import { calculatePriceAfterDiscount, currencyFormatter } from '@/lib/utils';
import { GET_PRODUCT_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: GET_PRODUCT_QUERYResult }) => {
  return (
    <Link
      href={`/product/${product!.slug?.current}`}
      key={product!._id}
      className='rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group'>
      {/* Image Section */}
      <div className='relative w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden'>
        <Image
          src={urlFor(product!.image!).url()}
          alt={product!.image?.alt || 'Product Image'}
          fill
          className='object-contain group-hover:scale-110 transition-transform duration-500'
        />
      </div>

      {/* Product Info Section */}
      <div className='mt-3 space-y-3 px-3 py-3'>
        {/* Product Name */}
        <h1 className='font-bold text-sm line-clamp-1'>{product!.name}</h1>

        {/* Pricing */}
        <div className='flex items-center gap-5'>
          <p className='text-primaryRed font-semibold text-sm'>{currencyFormatter(calculatePriceAfterDiscount(product!.base_price!, product!.discount_amount!))}</p>
          <p className='text-muted-foreground line-through text-xs'>${product!.base_price}</p>
        </div>

        {/* Rating */}
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
      </div>
    </Link>
  );
};

export default ProductCard;
