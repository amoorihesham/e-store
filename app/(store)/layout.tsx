import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import '../globals.css';

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '100', '200', '300', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'e-Store',
  description: 'Shop your desired products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang='en'>
        <body className={cn('font-inter antialiased', inter.variable)}>
          <main>
            <Header />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
