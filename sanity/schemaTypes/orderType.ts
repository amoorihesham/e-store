import { defineArrayMember, defineField, defineType } from 'sanity';
import { BasketIcon, ListIcon } from '@sanity/icons';
import { formatPrice } from '@/lib/utils';

export const orderType = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  icon: ListIcon,
  fields: [
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stripeCheckoutSessionId',
      title: 'Stripe Checkout Session Id',
      type: 'string',
    }),
    defineField({
      name: 'stripeCustomerId',
      title: 'Stripe Customer Id',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clerkUserId',
      title: 'Clerk User Id',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stripePaymentIntentId',
      title: 'Stripe Payment Intent Id',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Product Bought',
              type: 'reference',
              to: [{ type: 'product' }],
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity Purchase',
              type: 'number',
            }),
          ],
          preview: {
            select: {
              product: 'product.name',
              quantity: 'quantity',
              image: 'product.image',
              price: 'product.totalPrice',
              currency: 'product.currency',
            },
            prepare(select) {
              return {
                title: `${select.product} x ${select.quantity}`,
                media: select.image,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'customerName',
      amount: 'totalPrice',
      currency: 'currency',
      orderId: 'orderNumber',
      email: 'customerEmail',
    },
    prepare(select) {
      const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
      return {
        title: `${select.name} (${orderIdSnippet})`,
        subtitle: `${formatPrice(select.amount)} ${select.currency}, ${select.email}`,
        media: BasketIcon,
      };
    },
  },
});
