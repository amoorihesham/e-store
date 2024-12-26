import Image from 'next/image';
import { Button } from './ui/button';
import { getBanners } from '@/lib/sanity/functions';
import { urlFor } from '@/sanity/lib/image';

const Banner = async () => {
  const banners = await getBanners();

  return (
    <div className='py-10  bg-black '>
      <div className='container flex items-center justify-between'>
        <div className='space-y-5'>
          <div className='flex items-center gap-3'>
            <Image
              src='/images/apple-logo1.png'
              width={30}
              height={30}
              alt='apple logo'
            />
            <h1 className='text-white font-medium text-sm'>{banners[0].subHeading}</h1>
          </div>
          <div>
            <h2 className='text-white  text-2xl max-w-[200px] mb-5'>{banners[0].heading}</h2>
            <Button className='bg-white text-black hover:bg-gray-100 '>Shop now</Button>
          </div>
        </div>
        <div>
          <Image
            src={urlFor(banners[0].image?.asset?._ref as string).url()}
            width={450}
            height={400}
            alt={banners[0].image?.alt as string}
            className='object-cover hidden md:flex flex-1'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
