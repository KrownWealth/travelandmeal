import Image from "next/image";
import Link from "next/link";
import styles from "../styles/VillageMarket.module.css"

const VillageMarket = () => {
  return(
    <section className=" px-8 lg:px-16 py-20 bg-white pt-20 w-[100%]">
      {/* <h1 className="pb-20">Best Seller from Village Markets </h1> */}
     <div className="flex flex-col lg:flex-row lg:space-x-8 py-12">
     <div className="basis-full lg:basis-2/3 block lg:hidden">
      <Image src="/Assets/Images/banana on vendor table 1.jpg" alt="banana on vendor table" width={100} height={100}  className="w-[100%]"   />
      </div>
      <div className="basis-full lg:basis-1/3 pt-12 lg:pt-12">
      <h1>Everything you crave, served.</h1>
      <h2>Your favorite local restaurants</h2>
<h3>Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot youve been meaning to try.
      </h3>
      <button className={styles.longBtn}><Link href="">Find Fast-Food</Link></button>
        </div>
      <div className="basis-full lg:basis-2/3  hidden lg:block">
      <Image src="/Assets/Images/banana on vendor table 1.jpg" alt="banana on vendor table" width={100} height={100}  className="w-[100%]" />
      </div>
      

     </div>
     <div className="flex flex-col lg:flex-row lg:space-x-12 pv-12">
     <div className="basis-full lg:basis-2/3">
      <Image src="/Assets/Images/banana on vendor table 1.jpg" alt="banana on vendor table" width={100} height={100} 
      className="w-[100%]"/>
      </div>
      <div className="basis-full lg:basis-1/3 pt-12 lg:pt-12">
      <h1>Everything you crave, served.</h1>
      <h2>Your favorite local restaurants</h2>
<h3>Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
      </h3>
      <button className={styles.longBtn}><Link href="">Find Fast-Food</Link></button>
        </div>
     
      

     </div>
     </section>
  )
}

export default VillageMarket

