'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface SanityImage {
  _key: string; // Unique key for each image
  asset: {
    _ref: string; // Sanity image reference
    _type: string; // Type of the asset
  } | null;
  alt?: string | null; // Optional alt text for accessibility
}

const CarouselSlider = ({ images }: { images: SanityImage[] | undefined | null }) => {
  return (
    <Carousel
      opts={{
        align: 'center',
      }}>
      <CarouselContent>
        {images!.map((image) => (
          <CarouselItem
            key={image._key}
            className='w-full flex items-center justify-center'>
            <Image
              src={urlFor(image.asset!).url()}
              alt={image.alt!}
              width={400}
              height={400}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='-left-0 md:-left-10' />
      <CarouselNext className='-right-0 md:-right-10' />
    </Carousel>
  );
};

export default CarouselSlider;
