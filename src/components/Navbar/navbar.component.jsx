import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex item-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!!!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Patna <BiChevronRight />
          </span>
        </div>
        <div className="w-26 h-26">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavMd = () => {
  return (
    <div className="w-full flex item-center gap-3 bg-white py-3 px-2 rounded-md">
      <BiSearch />
      <input
        type="Search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for Movies,Events,Plays,Sports and Activities"
      />
    </div>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex item-center justify-between">
        <div className="flex item-center w-1/2 gap-3">
          <div className="w-24 h-12">
            <img
              src="https://o.remove.bg/downloads/b8ba83d0-f147-4ea3-aeea-fb715bb56067/image-removebg-preview.png"
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
              <BiMenu className="w-full h-full"/>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-bms-600 p-4">
        {/*Mobile Devices*/}
        <div className="md:hidden">
          <NavSm />
        </div>
        {/*Medium/Tab Devices */}
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>
        {/*Large Device */}
        <div className="hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
