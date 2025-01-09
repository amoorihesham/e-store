import Banner from '@/components/Banner';
import CategoryBanner from '@/components/CategoryBanner';
import FeaturesList from '@/components/FeaturesList';
import NoData from '@/components/NoData';
import ProductCard from '@/components/ProductCard';
import RenderList from '@/components/RenderList';
import { getBanners, getCategoriesBanners, getProducts } from '@/lib/sanity/functions';
import Link from 'next/link';

export default async function Home() {
  const products = await getProducts();
  // const categoriesBanners = await getCategoriesBanners();
  const banners = await getBanners();
  return (
    <section className='pageHeight'>
      <div className='container space-y-14 '>
        <Banner banners={banners} />
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

        {/* <CategoryBanner banners={categoriesBanners} /> */}
        <FeaturesList />
      </div>
    </section>
  );
}
