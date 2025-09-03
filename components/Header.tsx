'use client';
import Link from 'next/link';
import Form from 'next/form';
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { List, LogIn, Menu, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import useCartStore from '@/store/useCartStore';
import { Input } from './ui/input';
import { Button } from './ui/button';
import MaxWidthContainer from './MaxWidthContainer';
import Image from 'next/image';

const Header = () => {
  const CartCount = useCartStore((state) => state.items.length);
  return (
    <header className='py-4 shadow-md sticky top-0 bg-background z-50 border-b border-foreground/20'>
      <MaxWidthContainer>
        {/* Mobile navbar */}
        <div className='md:hidden flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Sheet>
              <SheetTrigger>
                <Menu className='w-5 h-5' />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      href='/'
                      className='font-bold text-xl'>
                      <Image
                        src={'/images/logo.png'}
                        alt='e-store logo image'
                        width={52}
                        height={72}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-5 mt-5 justify-center items-center'>
                  <Link
                    href={'/'}
                    className='text-sm text-muted-foreground font-semibold hover:text-black transition-colors duration-300 hover:bg-gray-100 w-full py-2 text-center rounded-sm'>
                    Home
                  </Link>
                  <Link
                    href={'/products'}
                    className='text-sm text-muted-foreground font-semibold hover:text-black transition-colors duration-300 hover:bg-gray-100 w-full py-2 text-center rounded-sm'>
                    Products
                  </Link>
                  <Link
                    href={'/'}
                    className='text-sm text-muted-foreground font-semibold hover:text-black transition-colors duration-300 hover:bg-gray-100 w-full py-2 text-center rounded-sm'>
                    Search
                  </Link>
                  <Link
                    href={'/'}
                    className='text-sm text-muted-foreground font-semibold hover:text-black transition-colors duration-300 hover:bg-gray-100 w-full py-2 text-center rounded-sm'>
                    Contact
                  </Link>
                </div>
                <Form
                  action='/search'
                  className='space-y-2 mt-5'>
                  <Input
                    placeholder='Search'
                    name='query'
                    className='text-[12px] md:text-[16px]'
                  />
                  <Button
                    className='w-full'
                    variant='outline'>
                    Search
                  </Button>
                </Form>
              </SheetContent>
            </Sheet>

            <Link
              href='/'
              className='font-bold text-xl'>
              <Image
                src={'/images/logo.png'}
                alt='e-store logo image'
                width={52}
                height={72}
              />
            </Link>
          </div>

          <ClerkLoaded>
            <div className='flex items-center gap-1'>
              <Link
                href={'/cart'}
                className=' relative'>
                <ShoppingBag className='h-5 w-5' />
                <span className=' absolute -top-2 left-0.5 w-4 h-4 bg-primaryRed rounded-full flex items-center justify-center text-white text-xs'>
                  {CartCount}
                </span>
              </Link>
              <SignedIn>
                <Link href={'/orders'}>
                  <List className='w-5 h-5' />
                </Link>

                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode='modal'>
                  <Button
                    variant='ghost'
                    className='px-2'>
                    <LogIn className='w-5 h-5' /> Login
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </ClerkLoaded>
        </div>

        {/* Desktop Navbar */}
        <div className='hidden md:flex items-center justify-between gap-x-10'>
          <div>
            <Link
              href='/'
              className='font-bold text-xl'>
              <Image
                src={'/images/logo.png'}
                alt='e-store logo image'
                width={52}
                height={72}
              />
            </Link>
          </div>
          <div className='flex-1 max-w-2xl'>
            <Form
              action='/search'
              className='w-full'>
              <Input
                placeholder='Search for products'
                name='query'
                className='w-full bg-muted-foreground/20 border'
              />
            </Form>
          </div>
          <div className='hidden items-center gap-5 md:flex  justify-end'>
            <ClerkLoaded>
              <div className='flex items-center gap-3 flex-1 justify-end'>
                <Link
                  href={'/cart'}
                  className=' relative'>
                  <ShoppingBag className='h-5 w-5' />
                  <span className=' absolute -top-2 left-0.5 w-4 h-4 bg-primaryRed rounded-full flex items-center justify-center text-white text-xs'>
                    {CartCount}
                  </span>
                </Link>
                <SignedIn>
                  <Link href={'/orders'}>
                    <List className='w-5 h-5' />
                  </Link>

                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode='modal'>
                    <Button
                      variant='ghost'
                      className='text-lg'>
                      <LogIn className='w-8 h-8' /> Login
                    </Button>
                  </SignInButton>
                </SignedOut>
              </div>
            </ClerkLoaded>
          </div>
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
