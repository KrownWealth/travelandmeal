import Image from "next/image";
import Link from "next/link";
import Restaurants from "./RestaurantsData";
import { PiCaretCircleDownFill } from "react-icons/pi";

const EachResCuisines = () => {
  return (
    <div className="flex flex-col bg-blue pb-8 py-12">
      {Restaurants.slice(1, 6).map((restaurant) => (
        <div key={restaurant.id} className="border mb-4">
          <div className="flex mx-auto justify-center items-center">
            {restaurant.soupMenu &&
              restaurant.soupMenu.map((soupItem) => (
                <div
                  key={soupItem.name}
                  className="rounded overflow-hidden shadow-lg m-4 border"
                >
                  <Link href={`/restaurants/${restaurant.id}`}>
                    <Image
                      src={soupItem.imgSrc}
                      alt={soupItem.altText}
                      width={400}
                      height={400}
                      className="cover"
                    />
                  </Link>
                </div>
              ))}
          </div>
          <div className="p-8">
            <div className="flex flex-row justify-between pt-8">
              <h3>{restaurant.title}</h3>
              <Link href={`/restaurants/${restaurant.id}`}>
                <button className="flex items-center bg-white text-black w-[150px] text-base hover:bg-white">
                  View Details
                  <span className="ml-2">
                    <PiCaretCircleDownFill className="bg-light-orange-2 text-black text-2xl" />
                  </span>
                </button>
              </Link>
            </div>
            <p>{restaurant.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EachResCuisines;
