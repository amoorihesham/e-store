import { parseAsFloat, createLoader, parseAsString } from "nuqs/server";

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const productsSearchParams = {
  category: parseAsString.withDefault(""),
};

export const loadSearchParams = createLoader(productsSearchParams);
