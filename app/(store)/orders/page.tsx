import OrderCard from '@/components/OrderCard';
import { getUserOrders } from '@/lib/sanity/functions';
import { currentUser } from '@clerk/nextjs/server';

export default async function OrdersPage() {
  const user = await currentUser();
  const orders = await getUserOrders(user!.id);
  console.log(process.env.NODE_ENV);
  return (
    <div className='pageHeight'>
      <div className='container flex items-center justify-center'>
        <div className='bg-white shadow-md p-5 rounded-md w-[100%] md:w-[50%]'>
          <h6 className='text-xl font-bold'>My Orders</h6>
          {orders.map((order) => (
            <OrderCard
              key={order._id}
              {...order}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
