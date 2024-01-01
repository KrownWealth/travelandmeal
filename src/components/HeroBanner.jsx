import Image from "next/image"
import styles from "@/styles/HeroBanner.module.css";
import SearchBar from "./SearchBar";
import AlreadyUserBtn from "./AlreadyUserBtn";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Modal from "./authentication/AuthModal";
import { useCart } from "@/contexts/CartContext";

const HeroBanner = ({showModal, setShowModal}) => {
  const { cartItems } = useCart();
  const handleSignInClick = () => {
    setShowModal(true);
  };

  const handleSignUpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return(
    <section className={styles.heroSection}>
      <div className={styles.heroImg}>
      <div className={styles.heroTopNav}>
      <div className={`${styles.heroTopLogo} lg:block md:block  hidden`}>
        <Link href="/">
          <Image src="/Assets/Images/TravelandMeal herologo.svg" alt="" width={100} height={100}
         className="w-full" />
         </Link>
      </div>
        <div className={styles.heroTopBtn}>
        <button onClick={handleSignInClick} className={styles.ctaBgRed}>Sign in</button>
        <button onClick={handleSignUpClick} className={styles.ctaBg2}>Sign up</button>
        <div className="pt-2 text-white text-2xl" id="">
        <Link href="/cart" className="flex" >
                <FaShoppingCart />
                <span className="ml-2">{cartItems.length}</span>
              
            </Link>
        </div>
        </div>
      </div>
      <div className="lg:hidden md:hidden block">
        <Image src="/Assets/Images/TravelandMeal mobilehero.svg" alt="" width={100} height={100} 
       className="w-full md:w-[50%] md:top-[5rem] relative top-[7rem] m-auto" />
      </div>
      <div className={styles.heroText}>
        <h1 className="text-white py-6">Explore RoadSide Fast-food and more.</h1>
      <SearchBar />
        <AlreadyUserBtn handleSignInClick={handleSignInClick} />

      </div>
      
      </div>
      {showModal && <Modal onClose={handleCloseModal} />}
     
    </section>
  )
}

export default HeroBanner