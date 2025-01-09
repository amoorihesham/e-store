'use client';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { urlFor } from '@/sanity/lib/image';
import { GET_BANNERS_QUERYResult } from '@/sanity.types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
const Banner = ({ banners }: { banners: GET_BANNERS_QUERYResult }) => {
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
      <CarouselContent>
        {banners!.map((banner) => (
          <CarouselItem
            key={banner._id}
            className='w-full'>
            <Image
              src={urlFor(banner.image!).url()}
              alt={banner.image!.alt!}
              width={3000}
              height={1000}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='-left-0 md:-left-10' />
      <CarouselNext className='-right-0 md:-right-10' />
    </Carousel>
  );
};

export default Banner;
