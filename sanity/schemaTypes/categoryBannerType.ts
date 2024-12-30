import { ImageIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const categoryBannerType = defineType({
  name: 'category_banner',
  title: 'Category Banner',
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
      name: 'btn_text',
      title: 'Shop Button Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
  },
});
