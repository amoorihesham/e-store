import AddToCartButton from '@/components/AddToCartButton';
import Breadcrumbs from '@/components/Breadcrumbs';

import { getProduct } from '@/lib/sanity/functions';
import { calculatePriceAfterDiscount, currencyFormatter } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default async function page({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = await getProduct(productId);

  return (
    <div className='py-12 min-h-svh'>
      <div className='container'>
        <Breadcrumbs
          mainPath='products'
          secPath='product'
          id={productId}
        />
        <div className='mt-14 flex justify-between'>
          <div className='left flex gap-10'>
            <div className='thumbnails space-y-10'>
              {product?.images?.map((image) => (
                <div
                  key={image._key}
                  className='border border-primaryRed bg-gray-200 flex items-center justify-center p-2'>
                  <Image
                    src={urlFor(image.asset!._ref!).url()}
                    alt={image.alt!}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
            <div className='bg-gray-200 p-10 flex items-center justify-center'>
              <Image
                src={urlFor(product!.image!.asset!._ref!).url()}
                alt={product!.image!.alt!}
                width={400}
                height={400}
                objectFit='contain'
              />
            </div>
          </div>
          <div className='right space-y-5 flex-1 px-10'>
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

                <span className={`text-sm ${product?.stocked ? 'text-green-500' : 'text-primaryRed'}`}>{product?.stocked ? 'in stock' : 'out of stock'}</span>
              </div>
            </div>
            <div className='flex items-center gap-7'>
              <p className='text-lg text-muted-foreground line-through'>{currencyFormatter(product!.base_price!)}</p>
              <p className='text-xl font-bold'>{currencyFormatter(calculatePriceAfterDiscount(product!.base_price!, product!.discount_amount!))}</p>
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
                  objectFit='contain'
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
                  objectFit='contain'
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
