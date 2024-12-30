import CartItemsList from '@/components/CartItemsList';

const CartPage = () => {
  return (
    <div className='py-8 min-h-svh'>
      <div className='container space-y-8'>
        <h6 className='text-2xl'>Cart</h6>
        <CartItemsList />
      </div>
    </div>
  );
};

export default CartPage;
