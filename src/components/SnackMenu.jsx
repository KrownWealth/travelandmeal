import styles from "@/styles/ImageGallery.module.css";
import { PiCaretCircleDownFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import useMenuVisibility from "@/hooks/useMenuVisibility";


const SnackMenu = ({restaurant}) => {
  const [menuVisibility, handlePreview ] = useMenuVisibility();

  return(
    <div className="flex flex-col bg-blue pb-8 border py-12">
    <div className="flex mx-auto justify-center items-center">
      {restaurant.snackMenu &&
        restaurant.snackMenu.map((snackItem) => (
          <div
            key={snackItem.name}
            className="rounded overflow-hidden shadow-lg m-4"
          >
            <Link href={`/restaurants/${restaurant.id}`}>
              <Image
                src={snackItem.imgSrc}
                alt={snackItem.altText}
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
        <h3>snack Menu</h3>
        <button
          onClick={() => handlePreview('snackMenu')}
          className="flex items-center bg-white text-black w-[150px] text-base hover:bg-white"
        >
          Preview Items
          <span className="ml-2">
            <PiCaretCircleDownFill className="bg-light-orange-2 text-black text-2xl" />
          </span>
        </button>
      </div>

   {menuVisibility.snackMenu &&
        restaurant.snackMenu &&
        restaurant.snackMenu.map((snackItem) => (
          <div
            key={snackItem.name}
            className="flex flex-col border-b mb-4 pb-4"
          >
            <div className="flex justify-between ">
              <h3>{snackItem.name}</h3>
              <h3>{snackItem.price}</h3>
            </div>
            <p>{snackItem.description}</p>
          </div>
        ))}
    </div>
  </div>
  )
}

export default SnackMenu;