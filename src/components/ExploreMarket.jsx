import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "@/styles/VillageMarket.module.css";
import Link from "next/link";

const ExploreMarket = () => {
  const mobileImages = [
    '/Images/villagemarket mobile.png', // Mobile image paths
    '/Images/village market-2 mobile.png',
    '/Images/banana bg-1 mobile.png',
  ];

  const desktopImages = [
    '/Images/village market desktop.png', // Desktop image paths
    '/Images/village market-2.jpg',
    '/Images/banana bg-1.jpg',
  ];

  return (
    <section className={styles.villageSection}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1} 
        navigation
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {(window.innerWidth <= 768 ? mobileImages : desktopImages).map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.villageImg} style={{ backgroundImage: `url(${image})` }}>
              <div className={styles.exploreContainer}>
                <div className={styles.textContainer}>
                  <h1 className="text-white ">
                    Get grocery and convenience store essentials
                  </h1>
                  <h2 className="text-white text-[22px]">
                    Grocery delivery, exactly how you want it.
                  </h2>
                  <h3 className="text-white">
                    Shop from home and fill your cart with fresh produce, frozen
                    entrees, deli delights, and more.
                  </h3>
                  <button className="w-[220px]">
                    <Link href="">Explore Village Market</Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ExploreMarket;
