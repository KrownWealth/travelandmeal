"use client"
import HeroBanner from "@/components/HeroBanner";
import HowItWorks from "@/components/HowItWorks";
import VillageMarket from "@/components/VillageMarket";
import ExploreMarket from "@/components/ExploreMarket"
import TopRestaurants from "@/components/TopRestaurants";
import Cuisines from "@/components/Cuisines";
import { useState } from "react";


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return(
    <>
     <HeroBanner showModal={showModal} setShowModal={setShowModal} />
   <HowItWorks />
   <VillageMarket />
   <ExploreMarket />
   <TopRestaurants />
   <Cuisines />
   </>
  
  )
}

export default Home