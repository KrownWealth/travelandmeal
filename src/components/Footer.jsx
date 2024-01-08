import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return(
    <>
    <div className="flex flex-col lg:flex-row gap-8 lg-px-16 ">

<div className="basis-1/4 md:basis-[33.3%] pt-5 text-white">
<div className="pb-5 font-bold"><p>Information</p></div>
<ul className="flex flex-col">
<li> <Link href="" className="font-light leading-10 hover:font-medium" >About Us</Link></li>
<li> <Link href="" className="font-light leading-10 hover:font-medium" >FAQ</Link></li>
<li> <Link href="" className="font-light leading-10 hover:font-medium" >Blog</Link></li>
<li> <Link href="" className="font-light leading-10 hover:font-medium" >Contact Us</Link></li>
<li><Link href=""  className="font-light leading-10 hover:font-medium">Privacy Policy</Link> </li>
<li><Link href=""  className="font-light leading-10 hover:font-medium">Terms and Condition</Link> </li>
</ul>
</div>
<div className="basis-1/4 pt-5 md:basis-[33.3%]">
<div className="pb-5 font-bold"><p>My Account</p></div>
<div className="flex flex-col text-sm">
<div> <Link href=""
 className="font-light leading-10 hover:font-medium" > My Order</Link></div>

<div> <Link href=""  className="font-light leading-10 hover:font-medium" >My Review</Link></div>
<div> <Link href=""  className="font-light leading-10 hover:font-medium" >My Favourite</Link></div>
<div> <Link href=""  className="font-light leading-10 hover:font-medium" >My Account</Link></div>
</div>
</div>
<div className="basis-1/4 md:basis-2/4 pt-5">
<div className="pb-5 font-bold"> <p>Location</p></div>
<div className="font-light">Lagos-Benin Expressway, Ore</div>
  <div className="flex flex-row gap-4 pt-5 text-3xl lg:text-4xl">
        <div><Link href=""><FaFacebookSquare/></Link></div>
        <div><Link href=""><FaSquareXTwitter/></Link></div>
        <div><Link href=""><FaInstagramSquare/></Link></div>
       
  </div>
</div>

</div>
       <hr className="mt-10"/>
       <div className="flex flex-col lg:flex-row lg:justify-between pt-10">
        <span><p>Copyright © 2023 TravelandMeal</p></span>
       <div className="pt-10 lg:pt-0">
        <div className="flex flex-cols-3 space-x-4">
        <div className="bg-white w-[18%] h-[18%]">
           <Image src="/Assets/Images/MasterCard_Logo.png" alt="secure payment gateways"
         width={100} height={100} className="placeholder:" /> 
         </div>
         <div className="bg-white w-[20%] h-[20%]"> 
         <Image src="/Assets/Images/verve logo.png" alt="secure payment gateways"
         width={100} height={100} className="pt-2 lg:pt-2 md:pt-3 " /> 
         </div>
         <div className="bg-white w-[20%] h-[20%]"> 
         <Image src="/Assets/Images/visa logo.png" alt="secure payment gateways"
         width={100} height={100} className="pt-3 lg:pt-2 md:pt-4" /> 
         </div>
        </div>

      
       </div>
       </div>
    </>
  )
}

export default Footer;