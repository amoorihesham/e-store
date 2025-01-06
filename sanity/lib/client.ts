import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    studioUrl: process.env.NODE_ENV === 'production' ? `https://estoreapp-sage.vercel.app/studio` : 'localhost:3000/studio',
  }, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
