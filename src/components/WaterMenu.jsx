import styles from "@/styles/ImageGallery.module.css";
import { PiCaretCircleDownFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import useMenuVisibility from "@/hooks/useMenuVisibility";


const WaterMenu = ({restaurant}) => {
  const [menuVisibility, handlePreview ] = useMenuVisibility();

  return(
    <div className="flex flex-col bg-blue pb-8 border py-12">
    <div className="flex mx-auto justify-center items-center">
      {restaurant.waterMenu &&
        restaurant.waterMenu.map((waterItem) => (
          <div
            key={waterItem.name}
            className="rounded overflow-hidden shadow-lg m-4"
          >
            <Link href={`/restaurants/${restaurant.id}`}>
              <Image
                src={waterItem.imgSrc}
                alt={waterItem.altText}
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
        <h3>water Menu</h3>
        <button
          onClick={() => handlePreview('waterMenu')}
          className="flex items-center bg-white text-black w-[150px] text-base hover:bg-white"
        >
          Preview Items
          <span className="ml-2">
            <PiCaretCircleDownFill className="bg-light-orange-2 text-black text-2xl" />
          </span>
        </button>
      </div>

   {menuVisibility.waterMenu &&
        restaurant.waterMenu &&
        restaurant.waterMenu.map((waterItem) => (
          <div
            key={waterItem.name}
            className="flex flex-col border-b mb-4 pb-4"
          >
            <div className="flex justify-between ">
              <h3>{waterItem.name}</h3>
              <h3>{waterItem.price}</h3>
            </div>
            <p>{waterItem.description}</p>
          </div>
        ))}
    </div>
  </div>
  )
}

export default WaterMenu;