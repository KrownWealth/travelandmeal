"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "./Modal";
import SuccessMessage from "./SuccessMessage";


const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
    <>
      <div className="navigation">
        <div className="logo">
          <Link href="/">
            <Image
              src="/Assets/Images/TravelandMeal.svg"
              alt="logo"
              width={250}
              height={250}
              className="block lg:hidden"
            />
          </Link>
          <Link href="/">
            <Image
              src="/Assets/Images/TravelandMeal desktoplogo.svg"
              alt="logo"
              width={400}
              height={100}
              className="hidden lg:block w-[80%]"
            />
          </Link>
        </div>
        <div className="topNav">
          <p className="text-[#d62828] pt-2 lg:block hidden">
            Need help with your order? Please Call 0700 0000 000
          </p>
          <Link href="" className="pt-1 hover:border-b-2 hover:border-[#d62828] hover:text-[#d62828] text-xl lg:block hidden">
            Fast-foods
          </Link>
          <button onClick={handleSignInClick} className="ctaBgRed">
            Sign in
          </button>
          <button onClick={handleSignUpClick} className="ctaBgWhite">
            Sign up
          </button>
          <div className="pt-2 text-[#d62828] text-2xl hidden lg:block" id="">
            <FaShoppingCart />
          </div>
        </div>
      </div>
      {showModal && <Modal onClose={handleCloseModal} onSuccess={() => setShowSuccessModal(true)} />}
      {showSuccessModal && <SuccessMessage onClose={() => setShowSuccessModal(false)} onSignInClick={handleSignInClick} />}

    </>
  );
};

export default Header;
