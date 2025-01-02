import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='pageHeight flex items-center justify-center'>
      <div className='container flex items-center justify-center'>
        <div className='flex flex-col items-center gap-y-3'>
          <Image
            src='/images/notFound.svg'
            alt='Not found '
            width={400}
            height={400}
          />
          <Link
            href='/'
            className='bg-primaryGreen px-5 py-2 text-white rounded-md hover:bg-green-600 transition-colors duration-300'>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
