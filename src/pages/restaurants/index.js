import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Restaurants from "@/components/RestaurantsData";

const FastFoods = () => {
  return (
    <>
      <section className=" px-8 pt-44 lg:px-16 pb-20  bg-white  w-[100%]">
        <div className="flex flex-row text-center items-center justify-between border-b-2">
          <h3 className="font-bold">Fastfoods</h3>
          <select name="" id="" className="font-bold">
            <option value="">Popular</option>
            <option value="">East Categories</option>
            <option value="">Delta-Nnewi Kitchen</option>
            <option value="">Igbo</option>
            <option value="">Igbo</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 py-20">
          {Restaurants.slice(1, 9).map((restaurant) => (
            <Link
              href={`/restaurants/${restaurant.id}`}
              key={restaurant.id}
              passHref
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <div className="bg-white w-[200px] h-[200px] mx-auto">
                  <Image
                    className="w-full bg-contain justify-center items-center"
                    src={restaurant.imgSrc}
                    alt={restaurant.altText}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="px-6">
                  <h2 className="font-bold text-xl mb-2">{restaurant.title}</h2>
                  <h3 className="text-gray-700 text-base">
                    {restaurant.dealings}
                  </h3>
                  <div className="py-6 pr-8">
                    <span className="inline-flex pr-3 py-4">
                      <IoLocationOutline />
                    </span>
                    <p className="inline-flex text-gray-700 text-base">
                      {restaurant.location}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between pb-8">
                    <p className="text-base">
                     {restaurant.workDay}
                    </p>
                    <p className="text-base">
                    {restaurant.workHour}
                    </p>
                  </div>
                </div>
                <hr />

                <div className="px-6 py-8">
                  <div className="flex justify-between pb-8">
                    <span className="inline-block text-sm font-semibold mr-2 mb-2">
                      <FaStar />
                    </span>
                    <span className="inline-block text-sm font-semibold mr-2 mb-2">
                      {restaurant.minOrder}
                    </span>
                  </div>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="exclusive">
        <div className="w-[600px] text-center">
          <h2 className="text-white">Get Exclusive Offers</h2>
          <h3 className=" text-white">
            Don&apos;t miss out on great offers!! Subscribe yourself and receive
            deals from all top restaurants via e-mail
          </h3>

          <form
            action=""
            className="w-[300px] lg:w-[500px] relative m-auto py-10"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Fast-food, menus"
                className="w-full p-2 lg:p-3 lg:pl-12 rounded-full justify-center items-center m-auto bg-white border-white"
              />
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 text-xl lg:text-4xl text-[#d62828]">
                <button className="w-[100px]">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default FastFoods;
