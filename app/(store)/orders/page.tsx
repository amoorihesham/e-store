import MaxWidthContainer from '@/components/MaxWidthContainer';
import OrderCard from '@/components/OrderCard';
import { getUserOrders } from '@/lib/sanity/functions';
import { currentUser } from '@clerk/nextjs/server';

export default async function OrdersPage() {
  const user = await currentUser();
  const orders = await getUserOrders(user!.id);

  return (
    <MaxWidthContainer className='py-8'>
      <h6 className='text-xl font-bold'>My Orders</h6>
      <div className='mt-8 space-y-6'>
        {orders.map((order) => (
          <OrderCard
            key={order._id}
            {...order}
          />
        ))}
      </div>
    </MaxWidthContainer>
  );
}
