import { GET_PRODUCTS_QUERYResult } from '@/sanity.types';

import SectionHint from './SectionHint';

import NoData from './NoData';
import ProductCard from './ProductCard';

const ProductsList = ({ products, title, hint }: { products: GET_PRODUCTS_QUERYResult; title: string; hint: string }) => {
  return (
    <div>
      <SectionHint hint={hint} />
      <h2 className='text-2xl font-bold'>{title}</h2>
      {!products.length && <NoData message='No Products Found' />}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-8 overflow-x-auto'>
        {products.slice(0, 5).map((product) => (
          <ProductCard
            product={product}
            key={product._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
