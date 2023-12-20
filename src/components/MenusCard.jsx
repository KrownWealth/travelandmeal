"use client"
import { FaPlus } from "react-icons/fa";
import { PiCaretCircleDownFill } from "react-icons/pi";
import Image from "next/image";
import useMenuVisibility from "@/hooks/useMenuVisibility";



const MenusCard = ({ restaurant, quantity, setQuantity, isOpen }) => {
  const [menuVisibility, handlePreview] = useMenuVisibility();
  
  return (
    <section>
      <div className="flex flex-col bg-blue pb-8 border py-12">
        {Object.keys(restaurant).map((menuType) => {
          if (Array.isArray(restaurant[menuType])) {
            return (
              <div key={menuType}>
                <div className="flex mx-auto justify-center items-center">
                  {restaurant[menuType].map((menuItem) => (
                    <div key={menuItem.name} className="rounded overflow-hidden shadow-lg m-4">
                      <Image
                        src={menuItem.imgSrc}
                        alt={menuItem.altText}
                        width={400}
                        height={400}
                        className="cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="p-8">
                  <div className="flex flex-row justify-between py-8">
                    <h3>{menuType}</h3>
                    <button
                      onClick={() => handlePreview(menuType)}
                      className="flex items-center bg-white text-black w-[150px] text-base hover:bg-white"
                    >
                      Preview Items
                      <span className="ml-2">
                        <PiCaretCircleDownFill className="bg-light-orange-2 text-black text-2xl" />
                      </span>
                    </button>
                  </div>
                  {menuVisibility[menuType] && (
                    <div>
                      {restaurant[menuType].map((menuItem) => (
                        <div key={menuItem.name} menuType={menuItem}
                         className="flex flex-col border-b mb-4 pb-4">
                          <div className="flex justify-between">
                            <h3>{menuItem.name}</h3>
                            <h3 className="text-center">{menuItem.price}</h3>
                            <button className="flex rounded-2 items-center text-base"
                            onClick={() => isOpen(menuItem, 1, setQuantity)}>
                              Quantity
                            </button>
                          </div>
                          <p>{menuItem.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default MenusCard;