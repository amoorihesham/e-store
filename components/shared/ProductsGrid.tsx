import { getProducts } from "@/lib/sanity/functions";
import ProductCard from "./ProductCard";
import { PageParamsProps } from "@/app/(store)/products/page";

const ProductsGrid = async ({ searchParams }: PageParamsProps) => {
  const q = await searchParams;
  const products = await getProducts(q?.category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
