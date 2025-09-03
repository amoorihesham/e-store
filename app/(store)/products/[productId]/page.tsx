import Image from 'next/image';
import { getProduct } from '@/lib/sanity/functions';
import { Star } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import CarouselSlider from '@/components/CarouselSlider';

export const revalidate = 2000;

export default async function page({ params }: { params: Promise<{ productId: string }> }) {
  const productId = (await params).productId;
  const product = await getProduct(productId);

  return (
    <div className='py-10 pageHeight my-auto'>
      <div className='container'>
        <Breadcrumbs
          mainPath='products'
          secPath='product'
          id={productId}
        />
        <div className='mt-8 flex flex-col gap-y-5 md:flex-row md:gap-x-5 lg:justify-between'>
          <div className='left max-w-[450px] flex items-center bg-gray-200'>
            <CarouselSlider images={product?.images} />
          </div>
          <div className='right space-y-3 lg:flex-1 lg:space-y-8 lg:px-14 '>
            <h6 className='text-2xl font-semibold'>{product?.name}</h6>
            <div>
              <div className='flex items-center gap-5'>
                <div className='flex items-center gap-5'>
                  <div className='flex items-center gap-1'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        color='gold'
                        fill='gold'
                        size={15}
                      />
                    ))}
                  </div>
                  <span className='text-sm text-muted-foreground'>(150 Reviews)</span>
                  <span className='text-sm text-muted-foreground'> | </span>
                </div>

                <span className={`text-sm ${product?.stocked ? 'text-green-500' : 'text-primaryRed'}`}>
                  {product?.stocked ? 'in stock' : 'out of stock'}
                </span>
              </div>
            </div>
            <div className='flex items-center gap-7'>
              {/* <p className='text-lg text-muted-foreground line-through'>{currencyFormatter(product!.base_price!)}</p> */}
              <p className='text-xl font-bold'>
                {/* {currencyFormatter(calculatePriceAfterDiscount(product!.base_price!, product!.discount_amount!))} */}
              </p>
            </div>
            <div>
              <p className='text-sm text-muted-foreground max-w-[500px]'>{product?.desc}</p>
            </div>
            <hr className='border-gray-200' />

            <AddToCartButton product={product!} />
            <div className='border rounded-md'>
              <div className='border-b p-3 flex items-center gap-5'>
                <Image
                  src='/icons/icon-delivery.png'
                  alt='delivery icon'
                  width={42}
                  height={42}
                />
                <div>
                  <h6 className='font-bold text-sm'>Free Delivery</h6>
                  <p className='text-xs mt-1'>Enter your postal code for Delivery Availability</p>
                </div>
              </div>

              <div className='p-3 flex items-center gap-5'>
                <Image
                  src='/icons/icon-return.png'
                  alt='delivery icon'
                  width={42}
                  height={42}
                />
                <div>
                  <h6 className='font-bold text-sm'>Return Delivery</h6>
                  <p className='text-xs mt-1'>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
