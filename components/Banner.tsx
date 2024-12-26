import Image from 'next/image';
import { Button } from './ui/button';

const Banner = () => {
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
            <h1 className='text-white font-medium text-sm'>iPhone 14 Series</h1>
          </div>
          <div>
            <h2 className='text-white  text-2xl max-w-[150px] mb-5'>Up to 10% off Voucher</h2>
            <Button className='bg-white text-black hover:bg-gray-100 '>Shop now</Button>
          </div>
        </div>
        <div>
          <Image
            src='/images/iphone.png'
            width={450}
            height={400}
            alt='iphone'
            className='object-cover hidden md:flex flex-1'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
