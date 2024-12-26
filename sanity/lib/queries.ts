import { defineQuery } from 'next-sanity';

export const GET_BANNERS_QUERY = defineQuery(`*[_type=='banner']`);
export const GET_PRODUCTS_QUERY = defineQuery(`*[_type=='product']`);
export const GET_CATEGORIES_QUERY = defineQuery(`*[_type=='category']`);
