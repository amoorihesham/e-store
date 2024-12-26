import { sanityFetch } from '@/sanity/lib/live';
import { GET_BANNERS_QUERY, GET_CATEGORIES_QUERY, GET_PRODUCTS_QUERY } from '../../sanity/lib/queries';
import { GET_BANNERS_QUERYResult, GET_CATEGORIES_QUERYResult, GET_PRODUCTS_QUERYResult } from '@/sanity.types';

export const getBanners = async (): Promise<GET_BANNERS_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_BANNERS_QUERY,
  });

  return response.data;
};

export const getProducts = async (): Promise<GET_PRODUCTS_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_PRODUCTS_QUERY,
  });

  return response.data;
};

export const getCategories = async (): Promise<GET_CATEGORIES_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_CATEGORIES_QUERY,
  });

  return response.data;
};
