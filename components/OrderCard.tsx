import { currencyFormatter } from '@/lib/utils';
import { Order } from '@/sanity.types';
import React from 'react';

const OrderCard = ({ orderNumber, orderDate, status, totalPrice }: Order) => {
  return (
    <div className='p-2 border rounded-md my-5 space-y-2'>
      <div>
        <h6 className='font-bold text-sm'>Order Number</h6>
        <span className='text-primaryGreen text-xs'>{orderNumber}</span>
      </div>
      <div>
        <h6 className='text-muted-foreground text-sm'>Order Data</h6>
        <span className='text-xs'>{orderDate?.split('T')[0]}</span>
      </div>
      <div className='flex items-center gap-2'>
        status: <span className='bg-green-100 px-2 py-1 flex items-center justify-center rounded-lg text-xs '>{status}</span>
      </div>
      <div>
        <h6 className='text-sm text-muted-foreground'>Total Amount</h6>
        <span className='font-bold '>{currencyFormatter(totalPrice!)}</span>
      </div>
      {/* <hr /> */}
      {/* <div>
        <h6>Order Items</h6>
        <div>
          {products?.map(product=>(
            // <div key={product.product.}></div>
          ))} 
        </div>
      </div> */}
    </div>
  );
};

export default OrderCard;
