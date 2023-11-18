import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer"


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
         <title>TravelandMeal | Order Food From Roadside Fast-Food on Lagos-Benin Expressway </title>
        <meta name="description" content="A web application that allows travelers to book their meal on the go." />
      </Head>
      <header className={showHeader ? 'fixed top-0 w-full bg-white shadow-lg' : 'hidden'} >
    <Header />
      </header>
      <main>{children}</main>
      <footer className="px-16 lg:px-16 pt-20 pb-40  bg-[#003049]  text-white">
       <Footer />
      </footer>
    </div>
  );
};

export default Layout;
