import Image from "next/image";
import Link from "next/link";
import styles from "../styles/VillageMarket.module.css"

const VillageMarket = () => {
  return(
    <>
    <section className=" px-0 lg:px-16 pt-20 bg-white w-[100%]">
      {/* <h1 className="pb-20">Best Seller from Village Markets </h1> */}
     <div className="flex flex-col lg:flex-row lg:space-x-8 py-12">
     <div className="basis-full lg:basis-2/3 block lg:hidden">
      <Image src="/Assets/Images/Crave for-1 mobile.png" alt="Food cravings" width={100} height={100}  className="w-[100%]"   />
      </div>
      <div className="basis-full lg:basis-1/3 pt-12 lg:pt-12 px-8 lg:text-left space-y-6">
      <h1>Everything you crave, served.</h1>
      <h2>Your favorite local restaurants</h2>
<h3>Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot youve been meaning to try.
      </h3>
      <button className="longBtn"><Link href="">Find Fast-Food</Link></button>
        </div>
      <div className="basis-full lg:basis-2/3  hidden lg:block mt-10">
      <Image src="/Assets/Images/Crave For-1.png" alt="Food cravings" width={100} height={100}  className="w-[100%]" />
      </div>
      

     </div>
     </section>
     <section className="px-0 lg:px-16 py-20  bg-[#f8f4d3]  w-[100%]">
     <div className="flex flex-col lg:flex-row lg:space-x-12 ">
     <div className="basis-full lg:basis-2/3 block lg:hidden">
      <Image src="/Assets/Images/gift items mobile.png" alt="Food cravings" width={100} height={100}  className="w-[100%]"   />
      </div>
     <div className="basis-full lg:basis-2/3 hidden lg:block">
      <Image src="/Assets/Images/gift items.png" alt="banana on vendor table" width={100} height={100} 
      className="w-[100%]"/>
      </div>
      <div className="basis-full lg:basis-1/3 pt-12 lg:pt-12 px-8 lg:text-left space-y-6">
      <h1>Gift Items on the Go.</h1>
      <h2>Your favorite road-side local fast-food</h2>
<h3>Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
      </h3>
      <button className="longBtn"><Link href="">Find Fast-Food</Link></button>
        </div>
     
      

     </div>
     </section>
     </>
  )
}

export default VillageMarket


