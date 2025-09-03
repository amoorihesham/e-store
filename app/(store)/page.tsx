import Banner from '@/components/Banner';
import FeaturesList from '@/components/FeaturesList';
import NoData from '@/components/NoData';
import ProductCard from '@/components/ProductCard';
import RenderList from '@/components/RenderList';
import { getProducts } from '@/lib/sanity/functions';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Home() {
  const products = await getProducts();

  return (
    <section className='pageHeight'>
      <div className='space-y-14'>
        <Suspense fallback={<p>Loading...</p>}>
          <Banner />
        </Suspense>
        <div>
          <RenderList
            data={products}
            keyExtractor={(item) => item._id}
            listHeading={'All Products'}
            render={(item) => <ProductCard product={item} />}
            EmptyComponent={() => <NoData message='No Products' />}
          />
          <div className='flex items-center justify-center'>
            <Link
              href='/products'
              className='bg-primaryRed text-white px-5 py-2 rounded-md'>
              See All
            </Link>
          </div>
        </div>
        <hr className='border-gray-200 mb-8' />

        <FeaturesList />
      </div>
    </section>
  );
}
