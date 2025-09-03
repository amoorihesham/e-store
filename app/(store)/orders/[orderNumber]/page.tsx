import MaxWidthContainer from '@/components/MaxWidthContainer';
import { Button } from '@/components/ui/button';
import { getOrderDetails } from '@/lib/sanity/functions';
import { cn, formatDateTime, formatPrice } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { Check } from 'lucide-react';
import Image from 'next/image';

const OrderDetailsPage = async ({ params }: { params: Promise<{ orderNumber: string }> }) => {
  const { orderNumber } = await params;
  const order = await getOrderDetails(orderNumber);
  console.log(order);
  return (
    <MaxWidthContainer className='py-8'>
      <div className='flex items-start justify-between gap-x-10'>
        <div className='flex-1 bg-foreground/10 p-6 rounded-md min-h-[calc(100dvh-(79px+60px))]'>
          <div className='flex items-center justify-between pb-3 border-b'>
            <div className='space-y-2 '>
              <h3 className='text-lg font-bold'>Order: #{order?.orderNumber}</h3>
              <p className='text-muted-foreground font-semibold tracking-wide'>{formatDateTime(order?.orderDate!)}</p>
            </div>
            <div>
              <p className='text-3xl font-bold text-primary'>{formatPrice(order?.totalPrice!)}</p>
            </div>
          </div>
          <div className='space-y-3 mt-4'>
            {order?.products?.map((product) => (
              <div
                key={product.product?._id}
                className='bg-secondary/40 rounded-sm flex items-center px-6 gap-x-4'>
                <div>
                  <Image
                    src={urlFor(product!.product!.image!).url()}
                    alt={`${product.product?.name} image`}
                    width={214}
                    height={264}
                    className='w-[200px] h-[244px]'
                  />
                </div>
                <div className='flex-1 flex items-center justify-between'>
                  <div>
                    <h3 className='text-2xl font-bold'>{product.product?.name}</h3>
                    <p className='text-muted-foreground text-lg font-thin mt-3'>productId: #{product.product?._id.slice(-10)}</p>
                  </div>
                  <div>
                    <p className='font-bold text-2xl text-primary'>{formatPrice(product.product?.base_price!)}</p>
                    <p className='text-lg font-thin text-muted-foreground mt-2'>
                      QTY: <span className='font-bold'>{product.quantity}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='p-6 rounded-md bg-foreground/10 w-sm h-[calc(100dvh-(79px+60px))] sticky top-20'>
          <h3 className='text-2xl font-bold'>Order Status</h3>
          <div className='mt-4'>
            <div>
              <div className='flex flex-col items-center'>
                <span className='bg-primary size-4 flex items-center justify-center rounded-full border-primary border'></span>
                <span className='w-px h-8 bg-primary block'></span>
                <span className='bg-primary size-6 flex items-center justify-center rounded-full border-primary border'>
                  <Check className='text-black' />
                </span>
                <span className='text-lg font-semibold uppercase mt-2 mb-1'>paid</span>
                <span className='text-muted-foreground text-sm font-light mb-2'>{formatDateTime(order?.orderDate!)}</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='bg-primary size-4 flex items-center justify-center rounded-full border-primary border'></span>
                <span className='w-px h-8 bg-primary block'></span>
                <span className='bg-primary size-6 flex items-center justify-center rounded-full border-primary border'>
                  <Check className='text-black' />
                </span>
                <span className='text-lg font-semibold uppercase mt-2 mb-1'>placed</span>
                <span className='text-muted-foreground text-sm font-light mb-2'>{formatDateTime(order?.orderDate!)}</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='bg-primary size-4 flex items-center justify-center rounded-full border-primary border'></span>
                <span className='w-px h-8 bg-primary block'></span>
                <span className='bg-primary size-6 flex items-center justify-center rounded-full border-primary border'>
                  <Check className='text-black' />
                </span>
                <span className='text-lg font-semibold uppercase mt-2 mb-1'>shipped</span>
                <span className='text-muted-foreground text-sm font-light mb-2'>{formatDateTime(order?.orderDate!)}</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='bg-primary size-4 flex items-center justify-center rounded-full border-primary border'></span>
                <span className='w-px h-8 bg-primary block'></span>
                <span className='bg-primary size-6 flex items-center justify-center rounded-full border-primary border'>
                  <Check className='text-black' />
                </span>
                <span className='text-lg font-semibold uppercase mt-2 mb-1'>delivered</span>
                <span className='text-muted-foreground text-sm font-light mb-2'>{formatDateTime(order?.orderDate!)}</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-10'>
            <Button
              variant={'secondary'}
              className='cursor-pointer'>
              Track Order
            </Button>
            <Button
              variant={'outline'}
              className='cursor-pointer'>
              Mark As Delivered
            </Button>
            <Button
              variant={'destructive'}
              className='cursor-pointer'>
              Cancel Order
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default OrderDetailsPage;
