import { type SchemaTypeDefinition } from 'sanity';

import { categoryType } from './categoryType';

import { bannerType } from './bannerType';
import { productType } from './product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, bannerType, productType],
};
