import { BsArrowRightCircleFill, BsSearch } from "react-icons/bs";



const SearchBar = () => {
  return (
    <form action="" className="w-[500px] relative m-auto top-40">
    <div className="relative justify-center items-center">
      <span className="absolute left-1 top-1/2 -translate-y-1/2 p-4 "><BsSearch /></span>
    <input type="text" placeholder="Search for Fast-food, cuisines and dishes"
    className="w-full p-4 pl-5 rounded-full justify-center items-center m-auto " />
    <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 ">
      <BsArrowRightCircleFill /></button>
    </div>
   
  </form>
  )
}

export default SearchBar;