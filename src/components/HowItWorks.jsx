import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";


const HowItWorks = () => {
  return(
    <section data-testid="how-it-works" className=" px-8 lg:px-16 py-20 bg-white pt-20  ">
      <h1 className="pb-20 text-center">How it Works </h1>
        {/*Display on mobile*/}
       <div className="grid grid-cols-3 gap-y-16 lg:hidden gap-x-4 text-left">
       <div data-testid="search-image" className="col-span-1 imageContainer">
          <Image src="/Assets/Images/search trans.svg" alt="search" 
          width={100} height={100} className="animatedImage" />
        <div className="redCircle"></div>
        </div>
        <div className="col-span-2">
        <h2>Search</h2>
          <h3>Search for restaurants, cuisines with the automatic advance location detection search option.</h3>
          <button className="arrowBtn"><span>Start Search</span>  <BsArrowRightShort size={26} /></button>
        
        </div>
        <div data-testid="order-pay" className="col-span-1">
          <Image src="/Assets/Images/Order order&pay.svg" alt="search"
           width={100} height={100} className="animatedImage" />
        </div>
        <div className="col-span-2">
          <h2>Order & Pay </h2>
          <h3>Order delicious meal & Pay with Card or Bank transfer through our secure Payment Gateway</h3>
          <button className="arrowBtn"><span>Order Menu</span>  <BsArrowRightShort size={26} /></button>
        
        </div>
        <div className="col-span-1">
          <Image src="/Assets/Images/serve.svg" alt="search"
           width={100} height={100} className="animatedImage" />
        </div>
        <div className="col-span-2">
        <h2>Instant Order Fulfilment</h2>
          <h3>Have your meal served Hot & Fast as soon as you bus stop over at the restaurants. Enjoy your meal!</h3>
          <button className="arrowBtn"><span>Your meal served</span>  <BsArrowRightShort size={26} /></button>
        
        </div>
        </div>
        {/*Display on desktop*/}
        <div className="lg:grid space-x-10 space-y-8 md:grid-cols-3 hidden text-center">
        <div>
          <Image src="/Assets/Images/search trans.svg" alt="search for fast-food, cuisines, and dishes" 
          width={100} height={100} className="m-auto animatedImage" />
          <h2 data-testid="search-heading">Search</h2>
          <h3>Search for restaurants, cuisines with the automatic advance location detection search option.</h3>
          <button className="arrowBtn"><span>Start Search</span>  <BsArrowRightShort size={26} /></button>
        </div>
        <div data-testid="order-pay">
          <Image src="/Assets/Images/Order order&pay.svg" alt="order and make payment" 
          width={100} height={100} className="m-auto animatedImage"  />
          <h2 data-testid="search-heading">Order & Pay </h2>
          <h3>Order delicious meal & Pay with Card or Bank transfer through our secure Payment Gateway</h3>
          <button className="arrowBtn"><span>Order Menu</span>  <BsArrowRightShort size={26} /></button>
        
        </div>
        <div data-testid="food-serve">
          <Image src="/Assets/Images/serve.svg" alt="get your food serve"
           width={100} height={100} className="m-auto animatedImage"  />
          <h2 data-testid="search-heading">Instant Order Fulfilment</h2>
          <h3>Have your meal served Hot & Fast as soon as you bus stop over at the restaurants. Enjoy your meal!</h3>
          <button className="arrowBtn"><span>Meal served</span>  <BsArrowRightShort size={26} /></button>
        
        </div>
      </div>
      
    </section>
  )
}

export default HowItWorks;