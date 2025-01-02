import { type SchemaTypeDefinition } from 'sanity';

import { categoryType } from './categoryType';

import { bannerType } from './bannerType';
import { productType } from './product';
import { categoryBannerType } from './categoryBannerType';
import { notFoundType } from './notFoundType';
import { featureType } from './featureType';
import { orderType } from './orderType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, bannerType, productType, categoryBannerType, notFoundType, featureType, orderType],
};
