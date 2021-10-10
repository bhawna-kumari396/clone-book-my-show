import React, { useContext } from "react";
import {
  //BiChevronRight,
  BiSearch,
  BiChevronDown,
  BiMenu,
  BiShareAlt,
} from "react-icons/bi";
import { MovieContext } from "../../context/movie.context";



const NavSm = () => {

  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-white flex item-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{movie.original_title}</h3>
        </div>
        <div className="w-26 h-26">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex item-center justify-between">
        <div className="flex item-center w-1/2 gap-3">
          <div className="w-28 h-12">
            <img
              src="https://logodix.com/logo/2011120.jpg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex item-center gap-3 bg-white py-3 px-2 rounded-md">
            <BiSearch />
            <input
              type="Search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for Movies,Events,Plays,Sports and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-gray-300 text-s flex items-center hover:text-red-500 cursor-pointer">
            Patna <BiChevronDown />
          </span>
          <button className="bg-red-400 text-white w-20 px-3 py-1 text-sm rounded hover:bg-red-600">
            Sign in
          </button>
          <div className="w-8 h-8 text-white hover:bg-red-600 cursor-pointer">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-600 p-4">
        {/*Mobile Devices*/}
        <div className="md:hidden">
          <NavSm />
        </div>
        {/*Medium/Tab Devices */}
        <div className="hidden md:block lg:hidden">
          <NavSm />
        </div>
        {/*Large Device */}
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
