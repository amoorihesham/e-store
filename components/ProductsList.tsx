import { GET_PRODUCTS_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHint from './SectionHint';
import { calculatePriceAfterDiscount, currencyFormatter } from '@/lib/utils';
import NoData from './NoData';

const ProductsList = ({ products, title, hint }: { products: GET_PRODUCTS_QUERYResult; title: string; hint: string }) => {
  return (
    <div>
      <SectionHint hint={hint} />
      <h2 className='text-3xl font-bold'>{title}</h2>
      {!products.length && <NoData message='No Products Found' />}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'>
        {products.slice(0, 5).map((product) => (
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
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
