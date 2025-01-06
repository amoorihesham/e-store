import { sanityFetch } from '@/sanity/lib/live';
import {
  GET_BANNERS_QUERY,
  GET_CATEGORIES_BANNER_QUERY,
  GET_CATEGORIES_QUERY,
  GET_FEATURES_QUERY,
  GET_NODATA_IMAGE_QUERY,
  GET_PRODUCT_QUERY,
  GET_PRODUCTS_QUERY,
  GET_SEARCHED_PRODUCTS_QUERY,
  GET_USER_ORDERS_QUERY,
} from '../../sanity/lib/queries';
import {
  GET_BANNERS_QUERYResult,
  GET_CATEGORIES_BANNER_QUERYResult,
  GET_CATEGORIES_QUERYResult,
  GET_FEATURES_QUERYResult,
  GET_NODATA_IMAGE_QUERYResult,
  GET_PRODUCT_QUERYResult,
  GET_PRODUCTS_QUERYResult,
  GET_SEARCHED_PRODUCTS_QUERYResult,
  GET_USER_ORDERS_QUERYResult,
} from '@/sanity.types';

export const getBanners = async (): Promise<GET_BANNERS_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_BANNERS_QUERY,
  });

  return response.data || [];
};

export const getProducts = async (): Promise<GET_PRODUCTS_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_PRODUCTS_QUERY,
  });

  return response.data || [];
};

export const getProduct = async (productId: string): Promise<GET_PRODUCT_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_PRODUCT_QUERY,
    params: { productId },
  });

  return response.data;
};

export const getCategories = async (): Promise<GET_CATEGORIES_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_CATEGORIES_QUERY,
  });

  return response.data || [];
};

export const getCategoriesBanners = async (): Promise<GET_CATEGORIES_BANNER_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_CATEGORIES_BANNER_QUERY,
  });

  return response.data || [];
};

export const getNoDataImage = async (): Promise<GET_NODATA_IMAGE_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_NODATA_IMAGE_QUERY,
  });

  return response.data || [];
};

export const getFeatures = async (): Promise<GET_FEATURES_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_FEATURES_QUERY,
  });

  return response.data || [];
};

export const getSearchedProducts = async (searchTerm: string | string[] | undefined): Promise<GET_SEARCHED_PRODUCTS_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_SEARCHED_PRODUCTS_QUERY,
    params: { searchTerm },
  });

  return response.data || [];
};

export const getUserOrders = async (clerkUserId: string): Promise<GET_USER_ORDERS_QUERYResult> => {
  const response = await sanityFetch({
    query: GET_USER_ORDERS_QUERY,
    params: { clerkUserId },
  });
  return response.data || [];
};
