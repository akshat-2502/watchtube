import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="shadow-lg flex w-full  justify-between px-5 py-3 items-center">
      <div className="flex items-center gap-4 w-1/4 ">
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <RxHamburgerMenu
            className="hover:cursor-pointer"
            onClick={() => toggleMenuHandler()}
          />
        </IconContext.Provider>
        <img className="w-38" src="/Images/watchtube.png" alt="" />
      </div>
      <div className="w-1/2 items-center flex justify-center">
        <div className="w-3/4 flex items-center">
          <input
            className="w-[85%] px-3 py-1 rounded-l-full border-1 border-zinc-500 border-r-white outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="bg-zinc-100 rounded-r-full border-1 border-zinc-500 hover:bg-zinc-300 px-4 py-2">
            <CiSearch className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="w-1/4 flex justify-end">
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <FaUserAlt />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Header;
