import styles from '@/styles/VillageMarket.module.css';
import Image from 'next/image';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import getIsMobile from './IsMobile';

const ExploreMarket = ({ isMobile }) => {
  return (
    <section data-testid="explore-market" className={styles.villageSection}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        autoPlay
        interval={3000}
        infiniteLoop={true}
        stopOnHover={true}
        showThumbs={false}
      >
        {slide('villagemarket mobile', 'village market desktop')}
        {slide('village market-2 mobile', 'village market-2')}
        {slide('Banana bg-1 mobile', 'Banana bg-1')}
      </Carousel>
    </section>
  );

  function slide(mobileImage, desktopImage) {
    return (
      <div className={styles.villageImg}>
        <Image
          src={`/Assets/Images/${isMobile ? mobileImage : desktopImage}.png`}
          alt="Explore village market"
          width={1000}
          height={1000}
        />
        <div className={styles.exploreContainer}>{textContainer()}</div>
      </div>
    );
  }

  function textContainer() {
    return (
      <div className={styles.textContainer}>
        <h1 className="text-white">
          Get grocery and convenience store essentials
        </h1>
        <h2 className="text-white text-[22px]">
          Grocery delivery, exactly how you want it.
        </h2>
        <h3 className="text-white">
          Shop from home and fill your cart with fresh produce, frozen entrees,
          deli delights, and more.
        </h3>
        <button data-testid="explore-link" className="w-[220px]">
          {/* Note a page will be developed for explore */}
          <Link href="/restuarants">Explore Village Market</Link>
        </button>
      </div>
    );
  }
};

ExploreMarket.getInitialProps = async ({ req }) => {
  const isMobile = await getIsMobile(req);
  return { isMobile };
};

export default ExploreMarket;
