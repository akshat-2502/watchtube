import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESSTION_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesstion, setSuggesstion] = useState([]);
  const [showSuggesstion, setShowSuggesstion] = useState(false);
  const dispatch = useDispatch();
  //debouncing - making an api call after specific time
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggesstion(), 200);

    return () => {
      //return is called if a useffect is again rerendering or reloading
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggesstion = async () => {
    const data = await fetch(YOUTUBE_SUGGESSTION_API + searchQuery);
    const json = await data.json();
    setSuggesstion(json[1]);
  };

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
        <div className="w-3/4 ">
          <div className="flex items-center">
            <input
              className="w-[85%] px-4 py-1 rounded-l-full border-1 border-zinc-500 border-r-white outline-none"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggesstion(true)}
              onBlur={() => setShowSuggesstion(false)}
            />
            <button className="bg-zinc-100 rounded-r-full border-1 border-zinc-500 hover:bg-zinc-300 px-4 py-2">
              <CiSearch className="w-4 h-4" />
            </button>
          </div>
          {showSuggesstion && (
            <div className="fixed w-[443px] rounded-lg border-l-1 border-r-1 border-b-1 bg-white border-zinc-400 mt-1">
              <ul>
                {suggesstion.map((s) => (
                  <li
                    key={s}
                    className="flex px-4 py-2 items-center gap-2 hover:bg-zinc-100 "
                  >
                    <CiSearch className="w-5 h-5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
