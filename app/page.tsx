// 'use client';

import CarsFiltersOpitons from '@/components/home/CarsFiltersOpitons';
import Hero from '@/components/home/Hero';
import SearchInput from '@/components/home/SearchInput';
import NavBar from '@/components/NavBar';
import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      <SignedIn>
        <NavBar />
        <Hero />
        <SearchInput />
        <CarsFiltersOpitons />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </>
  );
}
