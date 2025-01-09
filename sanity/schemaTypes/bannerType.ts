import { ImageIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const bannerType = defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [{ name: 'alt', type: 'string', title: 'ALT' }],
    }),
  ],
});
