import { defineField, defineType } from 'sanity';

export const notFoundType = defineType({
  name: 'notFound',
  title: 'Not Found',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Not Found Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [{ name: 'alt', title: 'ALT', type: 'string' }],
    }),
  ],
});
