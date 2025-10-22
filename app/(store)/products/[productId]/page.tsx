import Image from "next/image";
import { getProduct, getProducts } from "@/lib/sanity/functions";
import { Star } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import CarouselSlider from "@/components/CarouselSlider";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { calculateDiscountedPrice, formatPrice } from "@/lib/utils";

export const generateStaticParams = async () => {
  const products = await getProducts();

  return products.map((product) => ({
    productsId: product._id,
  }));
};

export default async function page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  const product = await getProduct(productId);

  return (
    <MaxWidthContainer className="py-8">
      <Breadcrumbs mainPath="products" id={productId} />
      <div className="mt-6 flex flex-col gap-y-5 md:flex-row  lg:justify-between gap-14 ">
        <div className="left max-w-[500px] flex items-center bg-muted/40 border rounded-sm overflow-hidden">
          <CarouselSlider images={product?.images} />
        </div>
        <div className="space-y-0 lg:flex-1">
          <h6 className="text-3xl font-semibold">{product?.name}</h6>

          <div className="flex items-center gap-5 mt-2">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} color="gold" fill="gold" size={15} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                (150 Reviews)
              </span>
              <span className="text-sm text-muted-foreground"> | </span>
            </div>

            <span
              className={`text-sm ${product?.stocked ? "text-green-500" : "text-primaryRed"}`}
            >
              {product?.stocked ? "in stock" : "out of stock"}
            </span>
          </div>

          <div className="flex items-center gap-7 my-2">
            <p className="text-lg text-destructive line-through">
              {formatPrice(product.base_price!)}
            </p>
            <p className="text-xl text-primary font-bold">
              {formatPrice(
                calculateDiscountedPrice(
                  product!.base_price!,
                  product.discount_amount!
                )
              )}
            </p>
          </div>

          <p className="text-sm text-muted-foreground max-w-[750px]">
            {product?.desc}
          </p>

          <hr className="border border-muted rounded-lg my-6" />

          <AddToCartButton product={product!} />
          <div className="border rounded-md mt-8">
            <div className="border-b px-6 py-4 flex items-center gap-5">
              <div className="bg-foreground/80 size-14 rounded-full flex items-center justify-center">
                <Image
                  src="/icons/icon-delivery.png"
                  alt="delivery icon"
                  width={42}
                  height={42}
                />
              </div>
              <div>
                <h6 className="font-bold text-sm">Free Delivery</h6>
                <p className="text-xs mt-1">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div className="px-6 py-4 flex items-center gap-5">
              <div className="bg-foreground/80 size-14 rounded-full flex items-center justify-center">
                <Image
                  src="/icons/Icon-return.png"
                  alt="delivery icon"
                  width={42}
                  height={42}
                />
              </div>
              <div>
                <h6 className="font-bold text-sm">Return Delivery</h6>
                <p className="text-xs mt-1">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
}
