import styles from "@/styles/ImageGallery.module.css";
import { PiCaretCircleDownFill } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import useMenuVisibility from "@/hooks/useMenuVisibility";



const SoupMenu = ({ restaurant }) => {
  const [menuVisibility, handlePreview ] = useMenuVisibility();

  return(
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
           onClick={() => handlePreview('soupMenu')}
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
            // menuVisibility={menuVisibility}
            className="flex flex-col border-b mb-4 pb-4"
          >
            <div className="flex justify-between ">
              <h3>{soupItem.name}</h3>
              <h3>{soupItem.price}</h3>
            </div>
            <p>{soupItem.description}</p>
          </div>
        ))}
    </div>
  </div>
  )
}

export default SoupMenu;