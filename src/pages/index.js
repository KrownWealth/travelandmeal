"use client"
import HeroBanner from "@/components/HeroBanner";
import HowItWorks from "@/components/HowItWorks";
import VillageMarket from "@/components/VillageMarket";
import ExploreMarket from "@/components/ExploreMarket"
import TopRestaurants from "@/components/TopRestaurants";
import Cuisines from "@/components/Cuisines"



const Home = () => {
  return(
    <>
     <HeroBanner />
   <HowItWorks />
   <VillageMarket />
   <ExploreMarket />
   <TopRestaurants />
   <Cuisines />
   </>
  
  )
}

export default Home