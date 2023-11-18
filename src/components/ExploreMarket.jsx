// components/ExploreMarket.js

import styles from "@/styles/VillageMarket.module.css";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react"


const ExploreMarket = () => {

  const [intervalz, setIntervalz] = useState(3000);


  return (
    <section className={styles.villageSection}>
      <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={true}
      autoPlay
      interval={intervalz}
      infiniteLoop={true}
      stopOnHover={true}
      showThumbs={false}
      >
         {isMobile() ? slide("/Assets/Images/villagemarket mobile.png") : slide("/Assets/Images/village market desktop.png")}
        {isMobile() ? slide("/Assets/Images/village market-2 mobile.png") : slide("/Assets/Images/village market-2.png")}
        {isMobile() ? slide("/Assets/Images/Banana bg-1 mobile.png") : slide("/Assets/Images/Banana bg-1.png")}
      </Carousel>
    </section>
  );
};

const isMobile = () => {
  const userAgent = navigator.userAgent;
  return
 
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
};

const slide = (imageUrl) => (
  <div className={styles.villageImg}>
    <Image src={imageUrl} alt="Carousel Image" width={100} height={100} style={{ width: '100%', height: 'auto' }} />
    <div className={styles.exploreContainer}>
      {textContainer()}
    </div>
  </div>
);

const textContainer = () => (
  <div className={styles.textContainer}>
    <h1 className="text-white">Get grocery and convenience store essentials</h1>
    <h2 className="text-white text-[22px]">Grocery delivery, exactly how you want it.</h2>
    <h3 className="text-white">
      Shop from home and fill your cart with fresh produce, frozen entrees, deli delights, and more.
    </h3>
    <button className="w-[220px]">
      <Link href="/explore-village-market">Explore Village Market</Link>
    </button>
  </div>
);

export default ExploreMarket;
