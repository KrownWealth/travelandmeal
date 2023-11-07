import Image from "next/image";

const HowItWorks = () => {
  return(
    <section className=" px-8 lg:px-16 py-20 bg-white pt-20">
      <h1 className="pb-20">How it Works </h1>
        {/*Display on mobile*/}
       <div className="grid grid-cols-3 gap-y-16 lg:hidden gap-x-4">
       <div className="col-span-1">
          <Image src="/Assets/Images/search trans.svg" alt="search" width={100} height={100} />
        </div>
        <div className="col-span-2">
        <h2>Search</h2>
          <h3>Search for restaurants, cuisines with the automatic advance location detection search option.</h3>
        </div>
        <div className="col-span-1">
          <Image src="/Assets/Images/Order order&pay.svg" alt="search" width={100} height={100} />
        </div>
        <div className="col-span-2">
          <h2>Order & Pay </h2>
          <h3>Order delicious meal & Pay with Card or Bank transfer through our secure Payment Gateway</h3>
        </div>
        <div className="col-span-1">
          <Image src="/Assets/Images/serve.svg" alt="search" width={100} height={100} />
        </div>
        <div className="col-span-2">
        <h2>Instant Order Fulfilment</h2>
          <h3>Have your meal served Hot & Fast as soon as you bus stop over at the restaurants. Enjoy your meal!</h3>
        </div>
        </div>
        {/*Display on desktop*/}
        <div className="lg:grid gap-4 md:grid-cols-3 hidden text-center">
        {/* First item */}
        <div>
          <Image src="/Assets/Images/search trans.svg" alt="search for fast-food, cuisines, and dishes " width={100} height={100} className="m-auto" />
          <h2>Search</h2>
          <h3>Search for restaurants, cuisines with the automatic advance location detection search option.</h3>
        </div>

        {/* Second item */}
        <div>
          <Image src="/Assets/Images/Order order&pay.svg" alt="order and make payment" width={100} height={100} className="m-auto"  />
          <h2>Order & Pay </h2>
          <h3>Order delicious meal & Pay with Card or Bank transfer through our secure Payment Gateway</h3>
        </div>

        {/* Third item */}
        <div>
          <Image src="/Assets/Images/serve.svg" alt="get your food serve" width={100} height={100} className="m-auto"  />
          <h2>Instant Order Fulfilment</h2>
          <h3>Have your meal served Hot & Fast as soon as you bus stop over at the restaurants. Enjoy your meal!</h3>
        </div>
      </div>
      
    </section>
  )
}

export default HowItWorks;