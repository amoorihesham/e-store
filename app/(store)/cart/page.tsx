import CheckoutButton from '@/components/buttons/CheckoutButton';
import CartItemsCount from '@/components/CartItemsCount';
import CartItemsList from '@/components/CartItemsList';
import CartTotalPrice from '@/components/CartTotalPrice';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Car } from 'lucide-react';

const CartPage = () => {
  return (
    <MaxWidthContainer className='py-6'>
      <div className='flex items-center gap-x-2 text-xl'>
        <h6 className='text-3xl font-semibold capitalize'>shopping cart</h6>
        (<CartItemsCount /> items)
      </div>
      <div className='flex items-start justify-between gap-x-10 mt-10'>
        <div className='relative p-6 bg-foreground/10 backdrop-blur-sm border rounded-sm shadow-xl flex-1 min-h-[calc(100dvh-(79px+120px))] '>
          <CartItemsList />
        </div>
        <div className='flex-1/2 max-w-sm border rounded-sm p-6 bg-foreground/10 sticky top-30 h-[calc(100dvh-(79px+120px))]'>
          <h3 className='text-xl font-semibold capitalize mb-6'>order summary</h3>
          <div className='space-y-2'>
            <h4 className='font-semibold text-primary/70'>Have a coupon code?</h4>
            <div className='relative'>
              <Input placeholder='coupon code' />
              <Button
                variant={'ghost'}
                className='absolute right-0 top-0 cursor-pointer'>
                Remove
              </Button>
            </div>
          </div>
          <p className='text-sm font-bold flex items-center gap-x-2 capitalize mt-6 mb-8'>
            <Car className='text-primary' /> free shipping free returns
          </p>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-semibold flex flex-col items-start'>
              <span>
                Subtotal (<CartItemsCount /> items):
              </span>
              <span className='text-sm font-light text-muted-foreground'>* Inclusive of VAT</span>
            </h3>
            <CartTotalPrice />
          </div>
          <div className='mt-6'>
            <CheckoutButton />
          </div>

          <div className='mt-16 bg-radial from-blue-800 to-blue-600  flex flex-col items-center justify-center rounded-sm h-[270px]'>
            <h4 className='uppercase font-bold text-5xl'>Visa</h4>
            <p className='max-w-3xs text-center  font-semibold text-foreground/90 mt-5'>
              Get $100 off instantly upon approval of Visa Card.
            </p>
            <Button
              variant={'outline'}
              className='mt-10 bg-transparent border border-foreground w-[178px] py-5 hover:bg-foreground/10 cursor-pointer font-semibold capitalize'>
              learn more
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default CartPage;
