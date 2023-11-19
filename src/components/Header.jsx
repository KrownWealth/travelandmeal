import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return(
    <>
      <div class="navigation">
          <div className="logo">
          <Image src="/Assets/Images/TravelandMeal.svg" alt="logo" width={150} height={50} className="block lg:hidden w-[100%]" />
          
          <Image src="/Assets/Images/TravelandMeal desktoplogo.svg" alt="logo" width={400} height={100}
           className="hidden lg:block w-[80%]"/>
          </div>
          <div className="topNav">
          <p className="text-[#d62828] pt-2 lg:block hidden">Need help with your order? Please Call 0700 0000 000</p>
        <Link href="" className="pt-1 hover:border-b-2 hover:border-[#d62828] hover:text-[#d62828] text-xl lg:block hidden">Fast-foods</Link>
        <button className="ctaBgRed"><Link href="" >Sign in </Link></button>
        <button className="ctaBgWhite"><Link href="" >Sign up</Link></button>
        <div className="pt-2 text-[#d62828] text-2xl" id=""><FaShoppingCart /></div>
        </div>
        </div>
    </>
  )
}

export default Header;