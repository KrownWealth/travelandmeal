"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import MenusCard from "@/components/MenusCard";
import Restaurants from "@/components/RestaurantsData";
import { QuantityModal } from "@/components/carts/CartModal";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import SuccessModal from "@/components/carts/SuccessModal"

const EachRestaurants = ({ 
  menuItem,
  loading
 }) => {


  const router = useRouter();
  const { id } = router.query;
  const restaurantId = parseInt(id, 10);
  const [quantity, setQuantity] = useState(1);
  const [quantityModalOpen, setQuantityModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const { cartItems, setCartItems } = useCart();


  
  const restaurant = Restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }
  

  const openQuantityModal = (menuItem, defaultQuantity ) => {
    setSelectedMenuItem(menuItem);
    setQuantity(defaultQuantity);
    setQuantityModalOpen(true);
  } 

const successModal = () => {

}
  const closeQuantityModal = () => {
    setSelectedMenuItem(null);
    setQuantity(1);
    setQuantityModalOpen(false);
  };
 
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };

  const handleTotal = () => {
    return quantity * (parseFloat(selectedMenuItem?.price) || 1);
  }
 
  const handleAddToCart = () => {
    const total = handleTotal();
    const newCartItem = {
      ...selectedMenuItem,
      quantity,
      total,
    };
    setCartItems([...cartItems, newCartItem]); 
    setShowSuccessModal(true);
    setQuantityModalOpen(false);
  };



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
        {loading ? (
          <div>
            <h2>Laoding Products...</h2>
          </div>
        ) : (
          
          <MenusCard
          restaurant={restaurant}
          isOpen={openQuantityModal}
          onClose={closeQuantityModal}
          onAdd={handleAdd}
          onSubtract={handleSubtract}
  onAddToCart={handleAddToCart}
  selectedMenuItem={selectedMenuItem}
  handleTotal={handleTotal}
         
          />
        )}
        <br />
        <hr />
      </div>

      {(quantityModalOpen &&
  <QuantityModal
    isOpen={quantityModalOpen}
    onClose={closeQuantityModal}
    quantity={quantity}
    onAdd={handleAdd}
    onSubtract={handleSubtract}
    onAddToCart={handleAddToCart}
    selectedMenuItem={selectedMenuItem}
    handleTotal={handleTotal}
    updatePrice={handleTotal} 
  />
)}
  {showSuccessModal && (
  <>
    {console.log("Rendering SuccessModal")}
    <SuccessModal showSuccessModal={showSuccessModal} 
     onClose={() => setShowSuccessModal(false)} />
  </>
)}

    </section>
  );
};

export default EachRestaurants;
