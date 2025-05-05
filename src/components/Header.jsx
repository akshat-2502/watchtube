import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="shadow-lg flex w-full  justify-between px-5 py-3 items-center">
      <div className="flex items-center gap-4 w-1/4 ">
        <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
          <RxHamburgerMenu />
        </IconContext.Provider>
        <img className="w-36" src="/Images/watchtube.png" alt="" />
      </div>
      <div className="w-1/2   items-center flex justify-center">
        <div className="w-3/4 border-1 overflow-hidden border-zinc-700 flex items-center rounded-full">
          <input
            className="w-[85%] px-3 py-1 outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="bg-zinc-200 hover:bg-zinc-300 pl-8 pr-9 py-1 ">
            <CiSearch className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="w-1/4 flex justify-end">
        <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
          <FaUserAlt />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Header;
