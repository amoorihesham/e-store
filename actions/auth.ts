'use server';

import { currentUser } from '@clerk/nextjs/server';

export const getLoggedInUser = async () => {
  return await currentUser();
};
