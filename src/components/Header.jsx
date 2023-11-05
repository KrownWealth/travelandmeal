import Image from "next/image";

const Header = () => {
  return(
    <header>
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
  )
}