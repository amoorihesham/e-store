import { client } from "@/sanity/lib/client";
import {
  GET_BANNERS_QUERY,
  GET_CATEGORIES_BANNER_QUERY,
  GET_CATEGORIES_QUERY,
  GET_FEATURES_QUERY,
  GET_NODATA_IMAGE_QUERY,
  GET_ORDER_QUERY,
  GET_PRODUCT_QUERY,
  GET_PRODUCTS_QUERY,
  GET_SEARCHED_PRODUCTS_QUERY,
  GET_USER_ORDERS_QUERY,
} from "../../sanity/lib/queries";
import {
  GET_BANNERS_QUERYResult,
  GET_CATEGORIES_BANNER_QUERYResult,
  GET_CATEGORIES_QUERYResult,
  GET_FEATURES_QUERYResult,
  GET_NODATA_IMAGE_QUERYResult,
  GET_ORDER_QUERYResult,
  GET_PRODUCT_QUERYResult,
  GET_PRODUCTS_QUERYResult,
  GET_SEARCHED_PRODUCTS_QUERYResult,
  GET_USER_ORDERS_QUERYResult,
} from "@/sanity.types";
import { type SanityDocument } from "next-sanity";

const options = { next: { revalidate: 50 } };

export const getBanners = async () => {
  const data = await client.fetch<SanityDocument[]>(
    GET_BANNERS_QUERY,
    {},
    options
  );

  return data ?? [];
};

export const getProducts = async () => {
  const response = await client.fetch<
    SanityDocument<GET_PRODUCT_QUERYResult>[]
  >(GET_PRODUCTS_QUERY, {}, options);
  return response ?? [];
};

export const getProduct = async (productId: string) => {
  const response = await client.fetch<SanityDocument<GET_PRODUCT_QUERYResult>>(
    GET_PRODUCT_QUERY,
    { productId },
    options
  );

  return response;
};

// export const getCategories = async (): Promise<GET_CATEGORIES_QUERYResult> => {
//   const response = await sanityFetch({
//     query: GET_CATEGORIES_QUERY,
//   });

//   return response.data || [];
// };

// export const getCategoriesBanners =
//   async (): Promise<GET_CATEGORIES_BANNER_QUERYResult> => {
//     const response = await sanityFetch({
//       query: GET_CATEGORIES_BANNER_QUERY,
//     });

//     return response.data || [];
//   };

// export const getNoDataImage =
//   async (): Promise<GET_NODATA_IMAGE_QUERYResult> => {
//     const response = await sanityFetch({
//       query: GET_NODATA_IMAGE_QUERY,
//     });

//     return response.data || [];
//   };

// export const getFeatures = async (): Promise<GET_FEATURES_QUERYResult> => {
//   const response = await sanityFetch({
//     query: GET_FEATURES_QUERY,
//   });

//   return response.data || [];
// };

// export const getSearchedProducts = async (
//   searchTerm: string | string[] | undefined
// ): Promise<GET_SEARCHED_PRODUCTS_QUERYResult> => {
//   const response = await sanityFetch({
//     query: GET_SEARCHED_PRODUCTS_QUERY,
//     params: { searchTerm },
//   });

//   return response.data || [];
// };

// export const getUserOrders = async (
//   clerkUserId: string
// ): Promise<GET_USER_ORDERS_QUERYResult> => {
//   const response = await sanityFetch({
//     query: GET_USER_ORDERS_QUERY,
//     params: { clerkUserId },
//   });
//   return response.data || [];
// };

// export const getOrderDetails = async (
//   orderNumber: string
// ): Promise<GET_ORDER_QUERYResult> => {
//   const response = await sanityFetch({
//     query: GET_ORDER_QUERY,
//     params: { orderNumber },
//   });

//   return response.data;
// };
