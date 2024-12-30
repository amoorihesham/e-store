import { defineQuery } from 'next-sanity';

export const GET_BANNERS_QUERY = defineQuery(`*[_type=='banner']`);
export const GET_PRODUCTS_QUERY = defineQuery(`*[_type=='product']{...,"category":category->{_id,title}}`);
export const GET_SEARCHED_PRODUCTS_QUERY = defineQuery(`*[_type=='product' && name match $searchTerm]`);
export const GET_PRODUCT_QUERY = defineQuery(`*[_type=='product' && slug.current == $productId][0]`);
export const GET_CATEGORIES_QUERY = defineQuery(`*[_type=='category']`);
export const GET_CATEGORIES_BANNER_QUERY = defineQuery(`*[_type=='category_banner']`);
export const GET_NODATA_IMAGE_QUERY = defineQuery(`*[_type=='notFound']{_id,image}`);
export const GET_FEATURES_QUERY = defineQuery(`*[_type=='feature']{_id,title,description,icon}`);
