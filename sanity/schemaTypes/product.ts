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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [{ name: 'alt', type: 'string', title: 'ALT' }],
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
});
