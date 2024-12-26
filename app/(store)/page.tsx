import Banner from '@/components/Banner';
import CategoriesList from '@/components/CategoriesList';
import ProductsList from '@/components/ProductsList';
import { getCategories, getProducts } from '@/lib/sanity/functions';

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <section className=' py-8'>
      <div className='container space-y-14'>
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
        <hr className='border-gray-200' />
      </div>
    </section>
  );
}
