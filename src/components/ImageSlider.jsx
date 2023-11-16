// pages/[slug].js

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper";
import 'swiper/css';
import styles from "@/styles/VillageMarket.module.css";
import Link from "next/link";

const ImageSlider = () => {

  SwiperCore.use([Autoplay])

  return(
    <section className={styles.villageSection}>
      <Swiper
      slidesPerView={1}
      loop={true}
      autoplay ={{
        delay: 2000
      }}
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      
    </Swiper>
       
       
    </section>
  );
};



export default ImageSlider;

function Slide() {
  return (
    <div className={styles.villageImg}>
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
    </div>
  );
}