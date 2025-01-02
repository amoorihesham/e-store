import CartItemsList from '@/components/CartItemsList';

const CartPage = () => {
  return (
    <div className='pageHeight'>
      <div className='container'>
        <h6 className='text-2xl'>Cart</h6>
        <CartItemsList />
      </div>
    </div>
  );
};

export default CartPage;
