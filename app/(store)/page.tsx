import Banner from '@/components/Banner';
import CategoryBanner from '@/components/CategoryBanner';
import FeaturesList from '@/components/FeaturesList';
import NoData from '@/components/NoData';
import ProductCard from '@/components/ProductCard';
import RenderList from '@/components/RenderList';
import { getCategoriesBanners, getProducts } from '@/lib/sanity/functions';

export default async function Home() {
  const products = await getProducts();
  const categoriesBanners = await getCategoriesBanners();
  return (
    <section className='pageHeight'>
      <div className='container '>
        <Banner />
        <RenderList
          data={products}
          keyExtractor={(item) => item._id}
          listHeading={'All Products'}
          render={(item) => <ProductCard product={item} />}
          EmptyComponent={() => <NoData message='No Products' />}
        />
        <hr className='border-gray-200 mb-8' />

        <CategoryBanner banners={categoriesBanners} />
        <FeaturesList />
      </div>
    </section>
  );
}
