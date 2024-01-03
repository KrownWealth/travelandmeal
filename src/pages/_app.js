import "@/styles/globals.css";
// import { Raleway } from "next/fonts/google"; // Fix the font import
import Layout from "../components/Layout";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";

// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
// });


export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}
