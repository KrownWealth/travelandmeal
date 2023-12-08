import { FaPlus } from "react-icons/fa";
import { PiCaretCircleDownFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import useMenuVisibility from "@/hooks/useMenuVisibility";
import CartModal from "./CartModal";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const SoupMenu = ({
  restaurant,
  handleSubtractItem,
  handleSubmit,
  handleOpenCart
}) => {
  const [menuVisibility, handlePreview] = useMenuVisibility();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const { cartItems, laoding, addToCart } = useCart();
  console.log(addToCart);

  if (!restaurant) {
    return <div>No restaurant data available</div>;
  }
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <section>
      {laoding ? (
        <div>
          <h2>Laoding Products...</h2>
        </div>
      ) : (
        <div className="flex flex-col bg-blue pb-8 border py-12">
          <div className="flex mx-auto justify-center items-center">
            {restaurant.soupMenu &&
              restaurant.soupMenu.map((soupItem) => (
                <div
                  key={soupItem.name}
                  className="rounded overflow-hidden shadow-lg m-4 "
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
            <div className="flex flex-row justify-between py-8">
              <h3>Soup Menu</h3>
              <button
                onClick={() => handlePreview("soupMenu")}
                className="flex items-center bg-white text-black w-[150px] text-base hover:bg-white"
              >
                Preview Items
                <span className="ml-2">
                  <PiCaretCircleDownFill className="bg-light-orange-2 text-black text-2xl" />
                </span>
              </button>
            </div>

            {menuVisibility.soupMenu &&
              restaurant.soupMenu &&
              restaurant.soupMenu.map((soupItem) => (
                <div
                  key={soupItem.name}
                  className="flex flex-col border-b mb-4 pb-4"
                >
                  <div className="flex justify-between ">
                    <h3>{soupItem.name}</h3>
                    <h3 className="text-center">{soupItem.price}</h3>
                    <button
                      className="flex items-center text-base"
                      onClick={() => {
                        openCartModal();
                        handleOpenCart(soupItem);
                      }}
                    >
                      <span className="ml-2">
                        <FaPlus />
                      </span>
                      Add
                    </button>
                  </div>
                  <p>{soupItem.description}</p>
                </div>
              ))}
          </div>

          <CartModal
            isOpen={isCartModalOpen}
            onClose={closeCartModal}
            handleSubtractItem={handleSubtractItem}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </section>
  );
};

export default SoupMenu;
