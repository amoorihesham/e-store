"use client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { GET_BANNERS_QUERYResult } from "@/sanity.types";

const BannersCarousel = ({ banners }: { banners: GET_BANNERS_QUERYResult }) => {
  return (
    <Carousel>
      <CarouselContent className="h-[calc(100dvh-81px)]">
        {banners!.map((banner) => (
          <CarouselItem key={banner._id} className="w-full h-full">
            <Image
              src={urlFor(banner.image!).url()}
              alt={banner.image!.alt!}
              width={3000}
              height={1000}
              className="w-full h-full"
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BannersCarousel;
