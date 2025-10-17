import { getProducts } from "@/lib/sanity/functions";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = async () => {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
