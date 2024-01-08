'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import Modal from './authentication/AuthModal'
import SuccessMessage from './authentication/SuccessModal'
import { useCart } from '@/contexts/CartContext'
import { useUser } from '@/contexts/AuthContext'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { cartItems } = useCart()
  const { user, logout } = useUser()

  const handleSignInClick = () => {
    setShowModal(true)
  }

  const handleSignUpClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="navigation">
        <div className="logo">
          {/* <Link href="/">
            <Image
              src="/Assets/Images/TM.svg"
              alt="logo"
              width={250}
              height={250}
              className="block lg:hidden pt-4"
            />
          </Link> */}
          <Link href="/">
            <Image
              src="/Assets/Images/TravelandMeal desktoplogo.svg"
              alt="logo"
              width={300}
              height={300}
              className="hidden lg:block"
            />
          </Link>
        </div>
        <div className="text-header text-[#d62828] lg:block hidden text-center pt-8">
          <p>Need help with your order? Please Call 0700 0000 000</p>
        </div>
        <div className="topNav">
          <Link
            href="/restaurants"
            className="pt-1 hover:border-b-2 hover:border-[#d62828] hover:text-[#d62828] text-xl lg:block hidden"
          >
            Fast-foods
          </Link>

          <div className="text-[#d62828] text-2xl items-center space-x-4">
            <button onClick={handleSignInClick} className="ctaBgRed">
              Sign in
            </button>
            <button onClick={handleSignUpClick} className="ctaBgWhite">
              Sign up
            </button>
          </div>

          <div className="pt-2 text-[#d62828] text-2xl items-center">
            <Link href="/cart" className="flex">
              <FaShoppingCart />
              <span className="ml-2">{cartItems.length}</span>
            </Link>
          </div>
          <div className="pt-2 text-[#d62828] text-2xl items-center">
            <div
              className="flex flex-col items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaUser />
              {user && isHovered && (
                <div className="ml-2">
                  <span className="hover:underline cursor-pointer text-base">
                    {user.name}
                  </span>
                  <div className="dropdown">
                    <Link href="/profile">Profile</Link>
                    <button onClick={() => logout()}>Logout</button>
                  </div>
                </div>
              )}
              {!user && isHovered && (
                <span className="ml-2 text-base">Not signed in</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          onSuccess={() => setShowSuccessModal(true)}
        />
      )}

      {showSuccessModal && (
        <SuccessMessage
          onClose={() => setShowSuccessModal(false)}
          onSignInClick={handleSignInClick}
        />
      )}
    </>
  )
}

export default Header
