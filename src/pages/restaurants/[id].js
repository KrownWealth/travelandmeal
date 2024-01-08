"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import MenusCard from "@/components/MenusCard";
import { QuantityModal } from "@/components/carts/CartModal";
import Image from "next/image";
import SuccessModal from "@/components/carts/SuccessModal";
import useCartHook from "@/hooks/useCartHook";
import Modal from "@/components/authentication/AuthModal";
import LoadingModal from "@/components/LoadingModal";

const EachRestaurants = ({ loading }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [showModal, setShowModal] = React.useState(false);

  const router = useRouter();
  const { id } = router.query;
  const restaurantId = parseInt(id, 10);
  
  useEffect(() => {
  }, [loading]);

  const {
    quantity,
    openQuantityModal,
    closeQuantityModal,
    handleAdd,
    handleSubtract,
    handleTotal,
    handleAddToCart,
    quantityModalOpen,
    showSuccessModal,
    setShowSuccessModal,
  } = useCartHook();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRestaurants(data.restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const restaurant = restaurants.find((r) => r.id === restaurantId);

  if (loading) {
    return <div>Loading Products...</div>;
  }

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }
 

  const openLoginModal = () => {
    setShowModal(true);
  };

  const closeLoginModal = () => {
    setShowModal(false);
  };


  if (loading) {
    // If still loading, show a loading modal
    return <LoadingModal />;
  }

  if (!user) {
    
    return (
      <div className="flex flex-col py-40 ">
        <h3 className="text-center justify-center">Please log in to access this page.</h3>
        <button onClick={openLoginModal} className="mx-auto">Login</button>
        {showModal && <Modal onClose={closeLoginModal} />}
      </div>
    );
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
            onAddToCart={() => {
              handleAddToCart(selectedMenuItem);
            }}
            selectedMenuItem={selectedMenuItem}
            handleTotal={handleTotal}
          />
        )}
        <br />
        <hr />
      </div>
      {quantityModalOpen && (
        <QuantityModal
          openQuantityModal={quantityModalOpen}
          closeQuantityModal={closeQuantityModal}
          quantity={quantity}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          handleAddToCart={handleAddToCart}
          selectedMenuItem={selectedMenuItem}
          handleTotal={handleTotal}
          updatePrice={handleTotal}
        />
      )}
      {showSuccessModal && (
        <>
          <SuccessModal
            showSuccessModal={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
            successCart="Items Successfully Added to Cart! 👍"
          />
        </>
      )}
    </section>
  );
};

export default EachRestaurants;
