import Banner from '@/components/Banner';
import CategoriesList from '@/components/CategoriesList';
import CategoryBanner from '@/components/CategoryBanner';
import FeaturesList from '@/components/FeaturesList';
import ProductsList from '@/components/ProductsList';
import { getCategories, getCategoriesBanners, getProducts } from '@/lib/sanity/functions';

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();
  const categoriesBanners = await getCategoriesBanners();

  return (
    <section className=' py-8'>
      <div className='container space-y-16'>
        <Banner />
        <ProductsList
          products={products}
          title='Flash Sale'
          hint='today'
        />
        <hr className='border-gray-200' />
        <CategoriesList
          hint='categories'
          categories={categories}
        />
        <CategoryBanner banners={categoriesBanners} />
        <FeaturesList />
        <ProductsList
          products={products}
          title='Explore Our Products'
          hint='Our Products'
        />
      </div>
    </section>
  );
}
