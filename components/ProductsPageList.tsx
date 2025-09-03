'use client';

import { Category, GET_PRODUCTS_QUERYResult } from '@/sanity.types';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { calculateDiscountedPrice, formatPrice } from '@/lib/utils';
import { Star } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProductsPageList = ({ products, categories }: { products: GET_PRODUCTS_QUERYResult; categories: Category[] }) => {
  const [productsList, setProductsList] = useState(products);

  const [search, setSearch] = useState('');

  const handleFiltersChange = async (category: string) => {
    console.log(category);
    if (!category) return;
    const filterd = productsList.filter((p) => p.category?._id == category);
    console.log('Filtered', filterd);
    setProductsList(filterd);
  };

  return (
    <div>
      <div className='flex mb-10 items-center justify-between'>
        <Input
          placeholder='Search products'
          className='w-1/2'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select onValueChange={(e) => handleFiltersChange(e)}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Category' />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem
                value={category._id}
                key={category._id}>
                {category.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
        {productsList.map((product) => (
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
                <p className='text-primaryRed font-semibold  text-sm'>
                  {formatPrice(calculateDiscountedPrice(product.base_price!, product.discount_amount!))}
                </p>
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

export default ProductsPageList;
