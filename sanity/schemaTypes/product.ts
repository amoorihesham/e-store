import { defineField, defineType } from 'sanity';
import { AddDocumentIcon } from '@sanity/icons';

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [{ name: 'alt', type: 'string', title: 'ALT' }],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [{ name: 'alt', title: 'ALT', type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'has_discount',
      title: 'Has Discount',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'discount_amount',
      title: 'Discount Amount',
      type: 'number',
    }),
    defineField({
      name: 'stocked',
      title: 'Is Available',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'quantity',
      title: 'Available Quantity',
      type: 'number',
    }),
    defineField({
      name: 'base_price',
      title: 'Base Price',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'base_price', media: 'image', has_discount: 'has_discount', discountAmount: 'discount_amount', stocked: 'stocked', quantity: 'quantity' },
    prepare(values) {
      const { title, subtitle, media, has_discount, discountAmount, stocked, quantity } = values;
      return {
        title,
        subtitle: `${has_discount ? `%${discountAmount}` : ''} ($${subtitle}) - ${stocked ? `QTY (${quantity})` : 'out of stock'}`,
        media: media,
      };
    },
  },
});
