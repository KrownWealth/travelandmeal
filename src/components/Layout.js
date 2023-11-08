
import Head from 'next/head';
import Image from "next/image";
import { useEffect, useState } from 'react';
import Link from "next/link";

const Layout = ({ children }) => {
  const [showHeader, setShowHeader] = useState(false);

  //Show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <button className="ctaBgRed"><Link href="" >Sign in </Link></button>
        <button className="ctaBgWhite"><Link href="" >Sign up</Link></button>
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
