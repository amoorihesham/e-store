'use client';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { GET_CATEGORIES_QUERYResult, GET_PRODUCTS_QUERYResult } from '@/sanity.types';
import { GET_CATEGORIES_QUERY, GET_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { calculatePriceAfterDiscount, currencyFormatter } from '@/lib/utils';
import { Star } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Loader from '@/components/Loader';

export default function ProductsPage() {
  const [products, setProducts] = useState<GET_PRODUCTS_QUERYResult>([]);
  const [filteredProducts, setFilteredProducts] = useState<GET_PRODUCTS_QUERYResult>([]);
  const [categories, setCategories] = useState<GET_CATEGORIES_QUERYResult>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFiltersChange = useCallback(
    (searchTerm?: string, categoryId?: string) => {
      if (!categoryId && !searchTerm) return setFilteredProducts(products);
      if (searchTerm) {
        const SearchResult = products.filter((product) => product.name?.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProducts(SearchResult);
      }
      if (categoryId) {
        const categoryResult = products.filter((product) => product.category?._id == categoryId);
        console.log(categoryResult);
        setFilteredProducts(categoryResult);
      }
      if (searchTerm && categoryId) {
        const totalResult = products.filter((product) => product.name?.toLowerCase().includes(searchTerm.toLowerCase()) && product.category?._id == categoryId);
        setFilteredProducts(totalResult);
      }
    },
    [products]
  );

  useEffect(() => {
    const handle = async () => {
      setIsLoading(true);
      try {
        const products = await client.fetch(GET_PRODUCTS_QUERY);
        const categories = await client.fetch(GET_CATEGORIES_QUERY);
        setProducts(products);
        setCategories(categories);
        setFilteredProducts(products);
      } catch (error) {
        console.log('Error fetching products', error);
      } finally {
        setIsLoading(false);
      }
    };
    handle();
  }, []);

  return (
    <section className='py-8 min-h-svh'>
      <div className='container'>
        {isLoading && <Loader />}
        {!isLoading && (
          <div>
            <div className='flex mb-10 items-center justify-between'>
              <Input
                placeholder='Search products'
                className='w-1/2'
                onChange={(e) => handleFiltersChange(e.target.value)}
              />
              <Select onValueChange={(categoryId) => handleFiltersChange('', categoryId)}>
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
            {!filteredProducts.length && <h1>No Products</h1>}
            {!!filteredProducts.length && (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
                {filteredProducts!.map((product) => (
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
            )}
          </div>
        )}
      </div>
    </section>
  );
}
