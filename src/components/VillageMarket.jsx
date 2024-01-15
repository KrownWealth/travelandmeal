import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VillageMarket = () => {
  return (
    <>
      <section
        data-testid="village-market"
        className=" px-0 lg:px-16 pt-20 bg-white"
      >
        {/* <h1 className="pb-20">Best Seller from Village Markets </h1> */}
        <div className="px-8 lg:px-0 flex flex-col lg:flex-row lg:space-x-8 py-12">
          <div className="basis-full lg:basis-2/3 block lg:hidden  ">
            <Image
              src="/Assets/Images/Crave for-1 mobile.png"
              alt="Food cravings"
              width={350}
              height={50}
              className="cover"
            />
          </div>
          <div className="basis-full lg:basis-1/3 pt-12 lg:pt-12 lg:text-left space-y-6">
            <h1 data-testid="village-market-heading">
              Everything you crave, served.
            </h1>
            <h2 data-testid="village-market-subheading">
              Your favorite local restaurants
            </h2>
            <h3 data-testid="village-market-text">
              {' '}
              Get a slice of pizza or the whole pie delivered, or pick up house
              lo mein from the Chinese takeout spot youve been meaning to try.
            </h3>
            <button aria-label="fastfoods" className="longBtn">
              <Link href="/restaurants/">Find Fast-Food</Link>
            </button>
          </div>
          <div className="basis-full lg:basis-2/3  hidden lg:block mt-10">
            <Image
              src="/Assets/Images/Crave For-1.png"
              alt="Food cravings"
              width={1000}
              height={700}
              className="cover"
            />
          </div>
        </div>
      </section>
      <section className="px-0 lg:px-16 py-20  bg-[#f8f4d3]">
        <div className="flex flex-col lg:flex-row lg:space-x-12 px-8 lg:px-0 ">
          <div className="basis-full lg:basis-2/3 block lg:hidden ">
            <Image
              src="/Assets/Images/gift items mobile.png"
              alt="Food cravings"
              width={350}
              height={50}
              className="md:hidden cover"
            />
          </div>
          <div className="basis-full lg:basis-2/3 hidden lg:block w-[500px] h-[500px]">
            <Image
              src="/Assets/Images/testing-bg.jpg"
              alt="banana on vendor table"
              width={1000}
              height={700}
            />
          </div>
          <div className="basis-full lg:basis-1/3 pt-12 lg:pt-12 lg:text-left space-y-6">
            <h1 data-testid="village-market-heading">
              Traveler&apos;s Delight On the Go!
            </h1>
            <h2 data-testid="village-market-subheading">
              Your favorite road-side Restaurants
            </h2>
            <h3 data-testid="village-market-text">
              Order your favorite African foods, intercontinental dishes,
              snacks, fruit items, suya spot for your journey. Pick up your
              items seamlessly when your bus makes a stop at our vetted
              restaurants place.
            </h3>
            <button className="longBtn">
              <Link href="/retaurants/">Order Now</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VillageMarket;
