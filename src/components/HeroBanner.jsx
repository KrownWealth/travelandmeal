import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import styles from "@/styles/HeroBanner.module.css";

const HeroBanner = () => {
  return (
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
          <Image src="/Assets/Images/TravelandMeal herologo.svg" alt="" width={100} height={100} />
        </div>
        <div className={styles.heroText}>
          <h1>Explore RoadSide Fast-food and more</h1>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 10 }}>
              <AiOutlineSearch style={{ color: 'gray' }} />
            </span>
            <input
              type="text"
              placeholder="Search for Fast-food, cuisines and dishes"
              style={{
                paddingLeft: '30px',
                paddingRight: '30px',
                width: '300px',
                border: '1px solid transparent',
                borderRadius: '5px',
                padding: '20px',
              }}
            />
            <span style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 10 }}>
              <BsArrowRightCircleFill style={{ color: 'gray' }} />
            </span>
          </div>
          <button>Sign in</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
