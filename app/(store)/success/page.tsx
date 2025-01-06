'use client';
import useCartStore from '@/store/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const SuccessPage = () => {
  const params = useSearchParams();
  const orderNumber = params.get('orderNumber');
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    if (orderNumber) {
      clearCart();
    }
  }, [orderNumber, clearCart]);

  return (
    <div className='pageHeight flex items-center justify-center'>
      <div className='container bg-gray-100 max-w-[280px] sm:max-w-[320px] md:max-w-xl h-[400px] flex items-center justify-center rounded-md hover:shadow-md transition-shadow duration-500'>
        <div>
          <div className='flex items-center justify-center'>
            <Image
              src='/images/check-img.png'
              width={200}
              height={200}
              objectFit='contain'
              alt='Payment successful'
            />
          </div>
          <div className='flex flex-col items-center mt-5 gap-y-5 '>
            <h3 className='text-xl font-semibold'>Successful Payment</h3>
            <p className='text-xs '>{orderNumber}</p>
            <div className='flex items-center gap-3'>
              <Link
                href={`/orders`}
                className='bg-primaryGreen px-5 py-2 text-white rounded-md hover:bg-green-600 transition-colors duration-300'>
                View orders
              </Link>
              <Link
                href={`/`}
                className='bg-white px-5 py-2 text-black rounded-md hover:bg-gray-50 transition-colors duration-300'>
                Continuo Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
