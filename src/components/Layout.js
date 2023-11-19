import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const [showHeader, setShowHeader] = useState(false);

  // Show header on scroll for index page only
  useEffect(() => {
    if (router.pathname === '/') {
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
    }
  }, [router.pathname]);

  const headerClass = router.pathname === '/' ? (showHeader ? 'fixed top-0 w-full bg-white shadow-lg' : 'hidden') : 'fixed top-0 w-full bg-white shadow-lg';

  return (
    <div>
      <Head>
        <title>TravelandMeal | Order Food From Roadside Fast-Food on Lagos-Benin Expressway</title>
        <meta name="description" content="A web application that allows travelers to book their meal on the go." />
      </Head>
      <header className={headerClass}>
        <Header />
      </header>
      <main>{children}</main>
      <footer className="px-16 lg:px-16 pt-20 pb-40 bg-[#003049] text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
