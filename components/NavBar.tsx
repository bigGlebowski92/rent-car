import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <section className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div className="hidden md:flex gap-20">
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Home
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Contact Us
        </h2>
      </div>
      <UserButton />
    </section>
  );
};

export default NavBar;
