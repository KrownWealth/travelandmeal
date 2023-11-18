import Image from "next/image";
import Link from "next/link";

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
        <button className="ctaBgRed"><Link href="" >Sign in </Link></button>
        <button className="ctaBgWhite"><Link href="" >Sign up</Link></button>
        </div>
        </div>
    </>
  )
}

export default Header;