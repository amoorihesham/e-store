import { GET_PRODUCTS_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHint from './SectionHint';

const ProductsList = ({ products, title, hint }: { products: GET_PRODUCTS_QUERYResult; title: string; hint: string }) => {
  if (!products) return <h1>No Products</h1>;
  return (
    <div>
      <SectionHint hint={hint} />
      <h2 className='text-3xl font-bold'>{title}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'>
        {products.slice(0, 5).map((product) => (
          <Link
            href={`/products/${product.slug?.current}`}
            key={product._id}
            className=' rounded-md overflow-hidden hover:shadow-md transition-shadow duration-300 group'>
            <div className='overflow-hidden'>
              <Image
                src={urlFor(product.image?.asset?._ref as string).url()}
                alt={product.image?.alt as string}
                width={400}
                height={400}
                className='object-contain w-full group-hover:scale-105 transition-transform duration-500 bg-gray-100'
              />
            </div>
            <div className='mt-3 space-y-3 px-3 py-3'>
              <h1 className='font-bold text-sm'>{product.name}</h1>
              <div className='flex items-center gap-5'>
                <p className='text-primaryRed font-semibold  text-sm'>${Number((product.base_price as number) - 50)}</p>
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
