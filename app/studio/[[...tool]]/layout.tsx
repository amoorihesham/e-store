import React from 'react';
import '../../globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'e-Store Studio',
  description: 'Sanity Studio',
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default layout;
