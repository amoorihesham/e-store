import { formatDateTime, cn } from '@/lib/utils';
import { Order } from '@/sanity.types';
import Link from 'next/link';
import { Info } from 'lucide-react';
const OrderCard = ({ orderNumber, orderDate, status }: Order) => {
  return (
    <div className='bg-secondary py-4 rounded-md px-6 flex items-center justify-between'>
      <div>
        <h3 className='text-foreground font-bold'>Order: #{orderNumber?.slice(-6)}</h3>
        <p className='text-muted-foreground font-medium'>
          {formatDateTime(orderDate!)} -{' '}
          <span
            className={cn(
              'p-1 uppercase rounded-sm px-3 font-bold tracking-wide',
              status === 'paid' && 'bg-primary text-black',
              status === 'delivered' && 'bg-destructive text-white',
              status === 'pending' && 'bg-blue-600 text-white'
            )}>
            {status}
          </span>
        </p>
      </div>
      <div>
        <Link
          href={`/orders/${orderNumber}`}
          className='p-3 flex items-center justify-center hover:bg-background/80 rounded-full transition-colors duration-500'>
          <Info />
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;
