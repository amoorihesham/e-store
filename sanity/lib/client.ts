import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  stega: {
    studioUrl: process.env.NODE_ENV === 'production' ? `https://${process.env.VERCEL_URL}/studio` : 'localhost:3000/studio',
  }, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
