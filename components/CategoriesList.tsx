import { GET_CATEGORIES_QUERYResult } from "@/sanity.types";
import SectionHint from "./SectionHint";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function CategoriesList({
  categories,
  hint,
}: {
  categories: GET_CATEGORIES_QUERYResult;
  hint: string;
}) {
  if (!categories) return <h1>No Found</h1>;
  return (
    <div>
      <SectionHint hint={hint} />
      <h2 className="text-3xl font-bold">Browse By Category</h2>
      <div className="flex gap-5 items-center mt-8 justify-between overflow-x-auto">
        {categories.slice(0, 5).map((category) => (
          <Link
            href={`/categories/${category.slug?.current}`}
            key={category._id}
            className="border p-2 rounded-md hover:bg-primaryRed group"
            aria-label="go to category details"
          >
            <Image
              src={urlFor(category.image?.asset?._ref as string).url()}
              alt={category.image?.alt as string}
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
