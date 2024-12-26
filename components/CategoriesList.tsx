import { GET_CATEGORIES_QUERYResult } from '@/sanity.types';
import SectionHint from './SectionHint';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

export default async function CategoriesList({ categories, hint }: { categories: GET_CATEGORIES_QUERYResult; hint: string }) {
  if (!categories) return <h1>No Found</h1>;
  return (
    <div>
      <SectionHint hint={hint} />
      <h2 className='text-3xl font-bold'>Browse By Category</h2>
      <div className='flex items-center justify-around  mt-10'>
        {categories.slice(0, 5).map((category) => (
          <Link
            href={`/categories/${category.slug?.current}`}
            key={category._id}
            className='border p-2 rounded-md hover:bg-primaryRed group'>
            <Image
              src={urlFor(category.image?.asset?._ref as string).url()}
              alt={category.image?.alt as string}
              width={100}
              height={100}
              className='object-contain'
            />
            <p className='text-center mt-2 font-light group-hover:text-white'>{category.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
