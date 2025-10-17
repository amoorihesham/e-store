import Banner from "@/components/Banner";
import FeaturesList from "@/components/FeaturesList";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import ProductsGrid from "@/components/ProductsGrid";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Banner />
      </Suspense>
      <MaxWidthContainer className="py-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold capitalize">all products</h2>
            <Link
              href="/products"
              className="bg-primaryRed text-white px-5 py-2 rounded-md"
            >
              See All
            </Link>
          </div>
          <Suspense fallback={<p>loading....</p>}>
            <ProductsGrid />
          </Suspense>
        </div>
      </MaxWidthContainer>
      <hr className="border border-muted my-8" />
      {/* <FeaturesList /> */}
    </div>
  );
}
