import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  

  return (
    <form
      action=""
      className="w-[300px] lg:w-[500px] relative m-auto "
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search for Fast-food, menus"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full p-2 lg:p-4 lg:pl-12 rounded-full justify-center items-center m-auto bg-white "
        />
        <Link href="/restaurants"
        
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 p-2 lg:p-4 text-xl lg:text-4xl text-[#d62828]">
      
          <BsArrowRightCircleFill />
      
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
