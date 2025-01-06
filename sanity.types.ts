/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Order = {
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCheckoutSessionId?: string;
  stripeCustomerId?: string;
  clerkUserId?: string;
  customerName?: string;
  customerEmail?: string;
  stripePaymentIntentId?: string;
  totalPrice?: number;
  status?: string;
  orderDate?: string;
  currency?: string;
  products?: Array<{
    product?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "product";
    };
    quantity?: number;
    _key: string;
  }>;
};

export type Feature = {
  _id: string;
  _type: "feature";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  icon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type NotFound = {
  _id: string;
  _type: "notFound";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Category_banner = {
  _id: string;
  _type: "category_banner";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  subHeading?: string;
  slug?: Slug;
  heading?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  btn_text?: string;
};

export type Product = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  desc?: string;
  category?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "category";
  };
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  has_discount?: boolean;
  discount_amount?: number;
  stocked?: boolean;
  quantity?: number;
  base_price?: number;
};

export type Banner = {
  _id: string;
  _type: "banner";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  subHeading?: string;
  slug?: Slug;
  heading?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  has_discount?: boolean;
  discount_amount?: number;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Order | Feature | NotFound | Category_banner | Product | Banner | Category | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: GET_BANNERS_QUERY
// Query: *[_type=='banner']
export type GET_BANNERS_QUERYResult = Array<{
  _id: string;
  _type: "banner";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  subHeading?: string;
  slug?: Slug;
  heading?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  has_discount?: boolean;
  discount_amount?: number;
}>;
// Variable: GET_PRODUCTS_QUERY
// Query: *[_type=='product']{...,"category":category->{...}}
export type GET_PRODUCTS_QUERYResult = Array<{
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  desc?: string;
  category: {
    _id: string;
    _type: "category";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  } | null;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  has_discount?: boolean;
  discount_amount?: number;
  stocked?: boolean;
  quantity?: number;
  base_price?: number;
}>;
// Variable: GET_SEARCHED_PRODUCTS_QUERY
// Query: *[_type=='product' && name match $searchTerm]{...,"category":category->{...}}
export type GET_SEARCHED_PRODUCTS_QUERYResult = Array<{
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  desc?: string;
  category: {
    _id: string;
    _type: "category";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  } | null;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  has_discount?: boolean;
  discount_amount?: number;
  stocked?: boolean;
  quantity?: number;
  base_price?: number;
}>;
// Variable: GET_PRODUCT_QUERY
// Query: *[_type=='product' && slug.current == $productId][0]{...,"category":category->{...}}
export type GET_PRODUCT_QUERYResult = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  desc?: string;
  category: {
    _id: string;
    _type: "category";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  } | null;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  has_discount?: boolean;
  discount_amount?: number;
  stocked?: boolean;
  quantity?: number;
  base_price?: number;
} | null;
// Variable: GET_CATEGORIES_QUERY
// Query: *[_type=='category']
export type GET_CATEGORIES_QUERYResult = Array<{
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
}>;
// Variable: GET_CATEGORIES_BANNER_QUERY
// Query: *[_type=='category_banner']
export type GET_CATEGORIES_BANNER_QUERYResult = Array<{
  _id: string;
  _type: "category_banner";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  subHeading?: string;
  slug?: Slug;
  heading?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  btn_text?: string;
}>;
// Variable: GET_NODATA_IMAGE_QUERY
// Query: *[_type=='notFound']{_id,image}
export type GET_NODATA_IMAGE_QUERYResult = Array<{
  _id: string;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
}>;
// Variable: GET_FEATURES_QUERY
// Query: *[_type=='feature']{_id,title,description,icon}
export type GET_FEATURES_QUERYResult = Array<{
  _id: string;
  title: string | null;
  description: string | null;
  icon: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
}>;
// Variable: GET_USER_ORDERS_QUERY
// Query: *[_type=='order' && clerkUserId == $clerkUserId] | order(orderDate desc)
export type GET_USER_ORDERS_QUERYResult = Array<{
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCheckoutSessionId?: string;
  stripeCustomerId?: string;
  clerkUserId?: string;
  customerName?: string;
  customerEmail?: string;
  stripePaymentIntentId?: string;
  totalPrice?: number;
  status?: string;
  orderDate?: string;
  currency?: string;
  products?: Array<{
    product?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "product";
    };
    quantity?: number;
    _key: string;
  }>;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type=='banner']": GET_BANNERS_QUERYResult;
    "*[_type=='product']{...,\"category\":category->{...}}": GET_PRODUCTS_QUERYResult;
    "*[_type=='product' && name match $searchTerm]{...,\"category\":category->{...}}": GET_SEARCHED_PRODUCTS_QUERYResult;
    "*[_type=='product' && slug.current == $productId][0]{...,\"category\":category->{...}}": GET_PRODUCT_QUERYResult;
    "*[_type=='category']": GET_CATEGORIES_QUERYResult;
    "*[_type=='category_banner']": GET_CATEGORIES_BANNER_QUERYResult;
    "*[_type=='notFound']{_id,image}": GET_NODATA_IMAGE_QUERYResult;
    "*[_type=='feature']{_id,title,description,icon}": GET_FEATURES_QUERYResult;
    "*[_type=='order' && clerkUserId == $clerkUserId] | order(orderDate desc)": GET_USER_ORDERS_QUERYResult;
  }
}
