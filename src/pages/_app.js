import "@/styles/globals.css";
import Layout from "../components/Layout";
import { Raleway } from "next/font/google";
import { CartProvider } from "@/contexts/CartContext";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
 
    < CartProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ CartProvider>
  
  );
}
