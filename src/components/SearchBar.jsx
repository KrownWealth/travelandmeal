// components/SearchBar.js
import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/restaurants/search?q=${searchTerm}`);
  };

  return (
    <form
      action=""
      className="w-[300px] lg:w-[500px] relative m-auto "
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search for Fast-food, menus"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 lg:p-4 lg:pl-12 rounded-full justify-center items-center m-auto bg-white "
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 p-2 lg:p-4 text-xl lg:text-4xl text-[#d62828]"
        >
          <BsArrowRightCircleFill />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
