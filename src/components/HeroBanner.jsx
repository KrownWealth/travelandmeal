import Image from "next/image"
import styles from "@/styles/HeroBanner.module.css";
import SearchBar from "./SearchBar";
import AlreadyUserBtn from "./AlreadyUserBtn";
import { FaShoppingCart } from "react-icons/fa";

const HeroBanner = () => {
  return(
    <section className={styles.heroSection}>
      <div className={styles.heroImg}>
      <div className={styles.heroTopNav}>
      <div className={`${styles.heroTopLogo} lg:block md:block  hidden`}>
        <Image src="/Assets/Images/TravelandMeal herologo.svg" alt="" width={100} height={100}
         className="w-full" />
      </div>
        <div className={styles.heroTopBtn}>
        <button className={styles.ctaBgRed}>Sign in</button>
        <button className={styles.ctaBg2}>Sign up</button>
        <div className="pt-2 text-white text-2xl" id=""><FaShoppingCart /></div>
        </div>
      </div>
      <div className="lg:hidden md:hidden block">
        <Image src="/Assets/Images/TravelandMeal mobilehero.svg" alt="" width={100} height={100} 
       className="w-full md:w-[50%] md:top-[5rem] relative top-[7rem] m-auto" />
      </div>
      <div className={styles.heroText}>
        <h1 className="text-white py-6">Explore RoadSide Fast-food and more.</h1>
      <SearchBar />
        <AlreadyUserBtn />

      </div>
      
      </div>
    </section>
  )
}

export default HeroBanner