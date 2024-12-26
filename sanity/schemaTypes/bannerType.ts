import { ImageIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const bannerType = defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'subHeading',
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
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
  ],
});
