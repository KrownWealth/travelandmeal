import React, { useState } from "react"
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Restaurants = [
  {
    id:0,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:1,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:2,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:3,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:4,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:5,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:6,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:7,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:8,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:9,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  },
  {
    id:10,
    title: 'Glofes',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/food background.jpg'
  }
]

const TopRestaurants = () => {
  const [visibleItems, setVisibleItems ] = useState(4);

  const handleVisibility = () => {
    setVisibleItems((prevVisible) => prevVisible + 2)
  }

return (
    <section className=" px-8 lg:px-16 py-20  bg-[#f8f4d3]  w-[100%]" >
      <div className="grid grid-rows-3 text-center items-center justify-center space-y-6 px-8">
      <h1 className="text-center">Top Fast-Food </h1>
      <h3>Popular Roadside Fast-food, Restaurants, Igbo Kitchen, from Lagos to East along Lagos-Benin Expressway Routes Ore</h3>
    
     <button className="mx-auto w-[320px] relative">
     <span className="left-4 right-2 top-2.5 absolute"><IoLocationOutline /></span>
   Lagos-Benin Expressway, Ore
         </button>
     
    
     
      </div>
      <div className="grid grid-rows-3 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {Restaurants.slice(0, visibleItems).map((restaurant) => (
          <div key={restaurant.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image  className="w-full"  src={restaurant.imgSrc} alt="Sunset in the mountains" width={100} height={100} />
            
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{restaurant.title}</h2>
              <h3 className="text-gray-700 text-base">{restaurant.dealings}</h3>
              <div className="py-6 pr-8">
              <span className="inline-flex pr-3 py-4"><IoLocationOutline /></span>
              <p className="inline-flex text-gray-700 text-base">{restaurant.location}</p>
              
              </div>
              </div>
            <hr />

            <div className="px-6 py-8">
              <div className="flex justify-between pb-8">
              <span className="inline-block text-sm font-semibold mr-2 mb-2"><FaStar/></span>
              <span className="inline-block text-sm font-semibold mr-2 mb-2">{restaurant.minOrder}</span>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        ))}
      </div>
     <div className="pt-16 flex justify-center items-center">
     {visibleItems < Restaurants.length && (
        <button className="w-[280px]" onClick={handleVisibility}>
          View All Fast-food
        </button>
      )}
     </div>
     
    </section>

  )
}
export default TopRestaurants;