'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VillageMartCarousel = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1 >= 3 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(int);
  }, []);
  const handlePrev = () => {
    setPage((prev) => (prev - 1 <= 0 ? 3 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev + 1 >= 3 ? 1 : prev + 1));
  };

  return (
    <section className="relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center">
      <div className="absolute w-full h-full">
        <Image
          className="w-full h-full object-cover object-center"
          sizes="100vw"
          fill
          alt="carousel travelandmeal"
          src={`/Assets/Images/carouselimages/img_${page}.png`}
        />
        <div className="absolute inset-0 flex flex-col space-y-8 justify-center items-center text-center bg-[#0000007c]">
          <h2 className="text-white">
            Get grocery and <br />
            convenience store essentials
          </h2>
          <p className="text-white">
            Shop from home and fill your cart with fresh produce, frozen
            entrees, deli delights, and more.
          </p>
          <button data-testid="explore-link" className="w-[220px]">
            <Link href="/restuarants">Explore Village Market</Link>
          </button>
        </div>
      </div>
      <div
        onClick={handlePrev}
        className="hidden lg:block absolute z-10 bottom-1/2 left-8 text-2xl font-semibold text-white cursor-pointer"
      >
        <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none hover:text-violet-500">
          &lt;
        </span>
      </div>
      <div
        onClick={handleNext}
        className="hidden lg:block absolute z-10 bottom-1/2 right-8 text-2xl font-semibold text-white cursor-pointer"
      >
        <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none hover:text-violet-500">
          &gt;
        </span>
      </div>
    </section>
  );
};

export default VillageMartCarousel;
