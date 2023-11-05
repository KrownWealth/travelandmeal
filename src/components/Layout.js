// Layout.js
import Head from 'next/head';
import Image from "next/image";
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only on component mount

  return (
    <div>
      <Head>
         <title>TravelandMeal | Travel, Eat, Enjoy </title>
        <meta name="description" content="A web application that allows travelers to book their meal on the go." />
      </Head>
      {/* Header component */}
      <header className={showHeader ? 'fixed top-0 w-full bg-white shadow-lg' : 'hidden'} >
    
        <div class="navigation">
          <div className="logo">
          <Image src="/Assets/Images/TravelandMeal.svg" alt="logo" width={150} height={50} className="block lg:hidden" />
          <Image src="/Assets/Images/TravelandMeal desktoplogo.svg" alt="logo" width={400} height={100}
           className="hidden lg:block"/>
          </div>
          <div className="topNav">
        <button className="ctaBgRed">Sign in</button>
        <button className="ctaBgWhite">Sign up</button>
        </div>
        </div>
      </header>
      <main>{children}</main>

      {/* Footer component */}
      <footer>
       
        <p>This is the footer</p>
      </footer>
    </div>
  );
};

export default Layout;
