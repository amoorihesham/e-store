import { getSearchedProducts } from '@/lib/sanity/functions';
import NoData from '@/components/NoData';
import ProductCard from '@/components/ProductCard';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const SearchPage = async (props: { searchParams: SearchParams }) => {
  const { query } = await props.searchParams;
  const products = await getSearchedProducts(query ? query : '');

  return (
    <div className='py-8 min-h-svh'>
      <div className='container space-y-10'>
        <h6 className='text-xl font-semibold text-center'>
          <span className='text-primaryRed'>( {products.length} )</span> Results Found
        </h6>
        {!products.length && <NoData message='No Results Founded' />}
        {!!products.length && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {products!.map((product) => (
              <ProductCard
                product={product}
                key={product._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
