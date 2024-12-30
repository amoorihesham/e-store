'use client';
import Image from 'next/image';
import useCartStore from '@/store/useCartStore';
import { currencyFormatter } from '@/lib/utils';
import { Button } from './ui/button';
import ClearCartButton from './ClearCartButton';
import RemoveFromCartButton from './RemoveFromCartButton';

const CartItemsList = () => {
  const { items } = useCartStore();
  return (
    <>
      {!items.length && (
        <div className='flex items-center justify-center flex-col'>
          <Image
            src={'/images/notFound.svg'}
            alt={'Not Found Image'}
            width={250}
            height={200}
            objectFit='contain'
          />
          <h6 className='text-2xl font-light'>Your cart is empty</h6>
        </div>
      )}
      {!!items.length && (
        <div className='flex flex-col md:flex-row  gap-10 relative'>
          <div className='flex-1'>
            {items.map((item) => (
              <div
                key={item._id}
                className='flex flex-col items-center md:flex-row gap-3 justify-between shadow-sm p-5 rounded-md mb-10 text-sm hover:shadow-md transition-shadow duration-500'>
                <div className='flex items-center gap-3'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                  <span className='text-sm'>{item.name}</span>
                </div>
                <span className='font-semibold text-sm text-muted-foreground flex flex-col items-center justify-center gap-1'>
                  Price
                  <span className='text-black'>{currencyFormatter(item.base_price)}</span>
                </span>
                <span className='font-semibold text-sm text-muted-foreground flex flex-col items-center justify-center gap-1'>
                  QTY: <span className='text-primaryRed'>{item.quantity}</span>
                </span>
                <span className='font-semibold text-muted-foreground text-sm flex flex-col items-center justify-center gap-1'>
                  Subtotal
                  <span className='text-black'>{currencyFormatter(item.quantity * item.base_price)}</span>
                </span>
                <RemoveFromCartButton productId={item._id} />
              </div>
            ))}
            <ClearCartButton />
          </div>

          <div className='rounded-md min-w-[250px] sticky bottom-0 left-0 md:top-0 md:right-0 p-5 border space-y-5 bg-white'>
            <div>
              <p className='flex items-center justify-between text-sm font-semibold text-muted-foreground capitalize'>
                Subtotal: <span className='text-black'>$850</span>
              </p>
            </div>
            <hr className='border-gray-100' />
            <div className='space-y-3'>
              <p className='flex items-center justify-between text-sm font-semibold text-muted-foreground capitalize'>
                Total items: <span className='text-black'>{items.length}</span>
              </p>
              <p className='flex items-center justify-between text-sm font-semibold text-muted-foreground capitalize'>
                Total: <span className='text-black'>$1100.00</span>
              </p>
            </div>
            <Button className='w-full bg-primaryRed hover:bg-red-700 transition-colors duration-300'>Checkout</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItemsList;
