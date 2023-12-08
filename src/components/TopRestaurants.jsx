import React, { useState } from "react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Restaurants from "./RestaurantsData";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const TopRestaurants = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleVisibility = () => {
    setVisibleItems((prevVisible) => prevVisible + 2);
  };

  return (
    <section className=" px-8 lg:px-16 py-20  bg-[#f8f4d3]  w-[100%]">
      <div className="grid grid-rows-3 text-center items-center justify-center space-y-6 px-8">
        <h1 className="text-center">Top Fast-Food </h1>
        <h3>
          Popular Roadside Fast-food, Restaurants, Igbo Kitchen, from Lagos to
          East along Lagos-Benin Expressway Routes Ore
        </h3>

        <button className="mx-auto w-[320px] relative">
          <span className="left-4 right-2 top-2.5 absolute">
            <IoLocationOutline />
          </span>
          Lagos-Benin Expressway, Ore
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {Restaurants.slice(0, visibleItems).map((restaurant) => (
          <div
            key={restaurant.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
          >
            <Image
              src={restaurant.imgSrc}
              alt="Sunset in the mountains"
             width={200}
              height={200}
              className="cover items-center justify-center mx-auto"
            />
            <div className="px-6 py-4">
              <div className="flex justify-between items-center pb-4">
                <h2 className="font-bold text-xl inline-block">
                  {restaurant.title}
                </h2>
                <span className="flex flex-row items-center">
                  <FaRegHeart className="mr-2 text-deep-red" />
                  <FaHeart />
                </span>
              </div>

              <h3 className="text-gray-700 text-base pb-4">
                {restaurant.dealings}
              </h3>
              <div className="flex justify-between pb-4">
                <span className="inline-block">
                  <IoLocationOutline />
                </span>
                <p className="inline-block text-gray-700 text-base">
                  {restaurant.location}
                </p>
              </div>
              <div className="flex justify-between pb-4">
                <p className="inline-block text-base">{restaurant.workDay}</p>
                <p className="inline-block text-base">{restaurant.workHour}</p>
              </div>
            </div>
            <hr />

            <div className="px-6 py-8">
              <div className="flex justify-between">
              <span className="flex flex-row items-center">
                  <FaStar className="text-deep-orange" />
                  <FaStar className="text-deep-orange" />
                  <FaStar className="text-deep-orange" />
                  <FaStar className="text-deep-orange"  />
                  <FaStar className="text-deep-orange"  />
                </span>
                <span className="inline-block text-sm font-semibold">
                  {restaurant.minOrder}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-16 flex justify-center items-center">
        {visibleItems < Restaurants.length && (
          <button className="w-[280px]" onClick={handleVisibility}>
            View All Fast-food
          </button>
        )}
      </div>
    </section>
  );
};
export default TopRestaurants;
