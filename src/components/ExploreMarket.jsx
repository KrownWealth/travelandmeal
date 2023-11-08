import Image from "next/image"
import styles from "@/styles/VillageMarket.module.css";
import Link from "next/link"

const ExploreMarket = () => {
  return(
    <section className={styles.villageSection}>
      <div className={styles.villageImg}>
     <div className={styles.exploreContainer}>
      <div className={styles.textContainer}>
      <h1 className="text-white">Get grocery and convenience store essentials</h1>
      <h2 className="text-white">Grocery delivery, exactly how you want it.</h2>
      <h3 className="text-white">Shop from home and fill your cart with fresh produce, frozen entrees, deli delights, and more.</h3>
      <button className="w-[220px]"><Link href="">Explore Village Market</Link></button>
     </div>
     </div>
      </div>
    </section>
  )
}

export default ExploreMarket