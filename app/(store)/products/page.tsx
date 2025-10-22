import MaxWidthContainer from "@/components/MaxWidthContainer";
import ProductsGrid from "@/components/shared/ProductsGrid";
import { FiltersBar } from "./_components/FiltersBar";
import { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import ProductsGridSkeleton from "@/components/shared/ProductsGridSkeleton";

export type PageParamsProps = { searchParams?: Promise<SearchParams> };

export default function ProductsPage({ searchParams }: PageParamsProps) {
  return (
    <MaxWidthContainer className="py-4 space-y-6">
      <FiltersBar />

      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductsGrid searchParams={searchParams} />
      </Suspense>
    </MaxWidthContainer>
  );
}
