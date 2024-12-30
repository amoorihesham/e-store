import { getSearchedProducts } from '@/lib/sanity/functions';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const SearchPage = async (props: { searchParams: SearchParams }) => {
  const { query } = await props.searchParams;
  const products = await getSearchedProducts(query ? query : '');
  console.log(products);

  return <div> search params: </div>;
};

export default SearchPage;
