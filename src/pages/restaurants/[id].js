import { useRouter } from "next/router";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import SoupMenu from "@/components/SoupMenu";
import Restaurants from "@/components/RestaurantsData";
import React, { useState } from "react"
import CartModal from "@/components/CartModal";
import { useCart } from "@/contexts/CartContext";

const EachRestaurants = ({handleAddItem}) => {

  const router = useRouter();
  const { id } = router.query;
  const restaurantId = parseInt(id, 10);

  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart } = useCart();

  const handleOpenCart = (item) => {
    setSelectedItem(item);
    setShowCartModal(true);
    addToCart(item); 
  };

  const handleCloseCart = () => {
    setShowCartModal(false);
    setSelectedItem(null);
  };

  // Find the restaurant with the matching ID in the data source
  const restaurant = Restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }
  return (
    <section className="pt-24 pb-40 bg-white">
      <div className="lg:pl-16 flex flex-row bg-light-orange-2 justify-between">
        <div className="pl-8 pt-16 basis-2/4">
          <h2>{restaurant.title}</h2>
          <div className="">
            <span className="inline-flex pr-3 py-4">
              <IoLocationOutline />
            </span>
            <p className="inline-flex text-gray-700 text-base">
              {restaurant.location}
            </p>
          </div>
          <h3 className="pt-4">Opens</h3>
          <div className="flex flex-row gap-4 pb-4">
            <p>{restaurant.workDay}</p>
            <p>{restaurant.workHour}</p>
          </div>
          <button className="flex justify-center items-center w-[150px]">
            Order Now
            <span className="ml-2">
              <BsFillArrowDownCircleFill />
            </span>
          </button>
        </div>
        <div className="basis-2/4 bg-white ">
          {" "}
          <Image
            src={restaurant.imgSrc}
            alt={restaurant.altText}
            width={300}
            height={300}
            className=" justify-center items-center mx-auto"
          />
        </div>
      </div>
      <hr />
      <div className="px-8 w-[100%] lg:w-[50%] mx-auto justify-center items-center bg-white  border-x-2">
      <SoupMenu restaurant={restaurant}
       handleOpenCart={handleOpenCart} 
      handleAddItem={handleAddItem}/>
        <br />
        <hr />
      </div>
      <CartModal isOpen={showCartModal} onClose={handleCloseCart} />
       
    </section>
  );
};

export default EachRestaurants;
