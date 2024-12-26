'use client';
import React from 'react';
import Link from 'next/link';
import Form from 'next/form';
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { List, ShoppingBag } from 'lucide-react';
import { Input } from './ui/input';
const Header = () => {
  const { user } = useUser();
  return (
    <header className='py-4 px-5 shadow-md'>
      <div className='container'>
        <div className='flex flex-col items-center gap-3 sm:flex-row'>
          <Link
            href='/'
            className='font-bold text-xl'>
            e-Store
          </Link>

          <Form
            action={'/search'}
            className='flex-1 mx-auto w-full'>
            <Input
              className='w-full placeholder:text-sm placeholder:text-gray-500'
              placeholder='Search'
            />
          </Form>
          <div className='flex items-center gap-5'>
            <Link
              href={'/cart'}
              className=''>
              <ShoppingBag className='h-5 w-5' />
            </Link>
            <ClerkLoaded>
              <SignedIn>
                <Link href={'/orders'}>
                  <List className='w-5 h-5' />
                </Link>
                <div className='flex items-center gap-3'>
                  <UserButton />
                  <div>
                    <span className='text-muted-foreground text-xs'>Welcome</span>
                    <p className='text-sm text-gray-800'>{user?.fullName}</p>
                  </div>
                </div>
              </SignedIn>
              {!user && <SignInButton />}
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
