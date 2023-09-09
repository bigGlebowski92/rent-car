import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 p-5 sm:px-10 md:px-20">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Premium Car <span className="text-blue-600">Rental</span> in Your Area
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Book the selected car effortlessly, Pay for driving only, Book the Car
          Now
        </h2>
        <button className="rounded-full bg-blue-500 p-2 mt-5 px-4 text-white hover:scale-105 transition-all">
          Explore Cars
        </button>
      </div>
      <div>
        <Image
          src="/hero.png"
          alt="hero"
          width={400}
          height={500}
          className="w-full object-cover align-middle"
        />
      </div>
    </section>
  );
};

export default Hero;
