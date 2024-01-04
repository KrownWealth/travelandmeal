import Image from "next/image";
import styles from "@/styles/HeroBanner.module.css";
import SearchBar from "./SearchBar";
import AlreadyUserBtn from "./AlreadyUserBtn";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Modal from "./authentication/AuthModal";
import { useCart } from "@/contexts/CartContext";

const HeroBanner = ({ showModal, setShowModal }) => {
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

  return (
    <section data-testid="hero-banner" className={styles.heroSection}>
      <div className={styles.heroImg}>
        <div className={styles.heroTopNav}>
          <div data-testid="hero-top-logo" className={`${styles.heroTopLogo} lg:block md:block  hidden`}>
            <Link href="/">
              <Image
                src="/Assets/Images/TravelandMeal herologo.svg"
                alt=""
                width={100}
                height={100}
                className="w-full"
              />
            </Link>
          </div>
          <div className={styles.heroTopBtn}>
            <button
              aria-label="Sign-In"
              role="button"
              className={styles.ctaBgRed}
              onClick={handleSignInClick}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSignInClick();
                }
              }}
            >
              Sign In
            </button>
            <button
              aria-label="Sign Up"
              role="button"
              className={styles.ctaBg2}
              onClick={handleSignUpClick}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSignUpClick();
                }
              }}
            >
              Sign Up
            </button>
            <div className="pt-2 text-white text-2xl" id="">
              <Link
                href="/cart"
                className="flex items-center focus:outline-none"
                role="button"
                aria-label="View-Cart"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    window.location.href = "/cart";
                  }
                }}
              >
                <FaShoppingCart />
                <span data-testid="cart-item-count" className="ml-2">{cartItems.length}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:hidden md:hidden block">
          <Image
            src="/Assets/Images/TravelandMeal mobilehero.svg"
            alt=""
            width={100}
            height={100}
            className="w-full md:w-[50%] md:top-[5rem] relative top-[7rem] m-auto"
          />
        </div>
        <div className={styles.heroText}>
          <h1 className="text-white py-6">
            Explore RoadSide Fast-food and more.
          </h1>
          <SearchBar />
          <AlreadyUserBtn handleSignInClick={handleSignInClick} />
        </div>
      </div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </section>
  );
};

export default HeroBanner;
