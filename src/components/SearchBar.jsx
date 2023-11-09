import { BsArrowRightCircleFill, BsSearch } from "react-icons/bs";



const SearchBar = () => {
  return (
    <form action="" className="w-[300px] lg:w-[500px] relative m-auto top-44 lg:top-40">
    <div className="relative">
      <span className="absolute left-1 top-1/2 -translate-y-1/2 p-2 lg:p-4  lg:text-xl text-black"><BsSearch /></span>
    <input type="text" placeholder="Search for Fast-food, menus"
    className="w-full p-2 lg:p-4 lg:pl-12 rounded-full justify-center items-center m-auto bg-white " />
    <div className="absolute right-1 top-1/2 -translate-y-1/2 p-2 lg:p-4 text-xl lg:text-4xl text-[#d62828]">
      <BsArrowRightCircleFill /></div>
    </div>
   
  </form>
  )
}

export default SearchBar;