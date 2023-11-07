import '@/styles/globals.css';
import Layout from "../components/Layout";
import { Raleway } from 'next/font/google';

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['200', '300', '400','500', '600', '700', '800', '900'],
   });


export default function App({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
</Layout>
)
}
