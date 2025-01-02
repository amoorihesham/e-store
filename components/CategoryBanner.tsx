import { GET_CATEGORIES_BANNER_QUERYResult } from '@/sanity.types';
import NoData from './NoData';
import { Button } from './ui/button';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const CategoryBanner = ({ banners }: { banners: GET_CATEGORIES_BANNER_QUERYResult }) => {
  return (
    <div>
      {banners.length ? (
        <div className='py-14  bg-black mt-12'>
          <div className='container flex flex-col items-center gap-y-10 md:flex-row md:justify-between md:px-14'>
            <div className='left space-y-5 md:order-first'>
              <span className='text-green-500 capitalize font-semibold'>{banners[0].subHeading}</span>
              <h6 className='text-white text-4xl max-w-[320px] font-bold lineHeight'>{banners[0].heading}</h6>
              <Button
                className='bg-green-500 h-14 font-light hover:bg-green-700 transition-colors duration-300 w-[170px]'
                size='lg'>
                {banners[0].btn_text}
              </Button>
            </div>
            <div className='right order-first md:order-last'>
              <Image
                src={urlFor(banners[0].image!.asset!._ref!).url()}
                alt={banners[0].image!.alt!}
                width={600}
                height={600}
                objectFit='contain'
                className=' bg-gradient-to-t from-transparent to-primaryRed/70 rounded-full overflow-visible '
              />
            </div>
          </div>
        </div>
      ) : (
        <NoData message='No Data Found For Categories Banner' />
      )}
    </div>
  );
};

export default CategoryBanner;
