'use client';
import { useCallback, useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { GET_CATEGORIES_QUERYResult, GET_PRODUCTS_QUERYResult } from '@/sanity.types';
import { GET_CATEGORIES_QUERY, GET_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import Loader from '@/components/Loader';
import ProductCard from '@/components/ProductCard';
import NoData from '@/components/NoData';

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

  if (isLoading) {
    return (
      <section className='py-8 pageHeight'>
        <div className='container'>
          <Loader />
        </div>
      </section>
    );
  }
  return (
    <section className='py-8 pageHeight'>
      <div className='container'>
        <div className='flex mb-8 items-center gap-x-5 md:justify-between'>
          <Input
            placeholder='Search products'
            className=' flex-1'
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
        {filteredProducts.length ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {filteredProducts!.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <NoData message='No Products' />
        )}
      </div>
    </section>
  );
}
