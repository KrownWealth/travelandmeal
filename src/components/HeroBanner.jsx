import Image from "next/image"
import styles from "@/styles/HeroBanner.module.css";
import SearchBar from "./SearchBar";
import AlreadyUserBtn from "./AlreadyUserBtn";

const HeroBanner = () => {
  return(
    <section className={styles.heroSection}>
      <div className={styles.heroImg}>
      <div className={styles.heroTopNav}>
      <div className={`${styles.heroTopLogo} lg:block hidden`}>
        <Image src="/Assets/Images/TravelandMeal herologo.svg" alt="" width={100} height={100} />
      </div>
        <div className={styles.heroTopBtn}>
        <button className={styles.ctaBgRed}>Sign in</button>
        <button className={styles.ctaBg2}>Sign up</button>
        </div>
      </div>
      <div className={`${styles.heroLogo} lg:hidden block `}>
        <Image src="/Assets/Images/TravelandMeal mobilehero.svg" alt="" width={100} height={100} />
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