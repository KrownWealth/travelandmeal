import Image from "next/image";

const HowItWorks = () => {
  return(
    <section className="px-16 py-12 bg-blue-100">
       <div className="grid grid-cols-2 gap-y-12 lg:hidden ">
       <div>
          <Image src="/Assets/Images/search trans.svg" alt="search" width={100} height={100} />
        </div>
        <div>
         <h1>Search</h1>
         <h2>Search for restaurants, cuisines with the automatic advance location detection search option.</h2>
        </div>
        <div>
          <Image src="/Assets/Images/Order order&pay.svg" alt="search" width={100} height={100} />
        </div>
        <div>
         <h1>Search</h1>
         <h2>Search for restaurants, cuisines with the automatic advance location detection search option.</h2>
        </div>
        <div>
          <Image src="/Assets/Images/serve.svg" alt="search" width={100} height={100} />
        </div>
        <div>
         <h1>Search</h1>
         <h2>Search for restaurants, cuisines with the automatic advance location detection search option.</h2>
        </div>
        </div>
        <div className="lg:grid gap-4 md:grid-cols-3 hidden ">
        {/* First item */}
        <div className="text-center ">
          <Image src="/Assets/Images/search.svg" alt="search" width={100} height={100} className="m-auto" />
          <h1>Search</h1>
          <h2>Search for restaurants, cuisines with the automatic advance location detection search option.</h2>
        </div>

        {/* Second item */}
        <div className="text-center">
          <Image src="/Assets/Images/search.svg" alt="search" width={100} height={100} className="m-auto"  />
          <h1>Search</h1>
          <h2>Search for restaurants, cuisines with the automatic advance location detection search option.</h2>
        </div>

        {/* Third item */}
        <div className="text-center">
          <Image src="/Assets/Images/search.svg" alt="search" width={100} height={100} className="m-auto"  />
          <h1>Search</h1>
          <h2>Search for restaurants, cuisines with the automatic advance location detection search option.</h2>
        </div>
      </div>
      
    </section>
  )
}

export default HowItWorks;