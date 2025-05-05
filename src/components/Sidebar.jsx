import React from "react";
import { useSelector } from "react-redux";
import {
  AiFillHome,
  SiYoutubeshorts,
  LiaVideoSolid,
  GoHistory,
  CgPlayList,
  GoVideo,
  MdOutlineWatchLater,
  AiOutlineLike,
  GrChannel,
  CgMediaLive,
  RiMusicLine,
  RiMovie2Line,
  GrGamepad,
  MdSportsBasketball,
} from "../utils/iconsPack";
import { HiRocketLaunch } from "react-icons/hi2";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="py-5 px-6 w-56 shadow-md  h-screen">
      <ul>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <AiFillHome />
          Home
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <SiYoutubeshorts />
          Shorts
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <LiaVideoSolid /> Videos
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <CgMediaLive /> Live
        </li>
      </ul>
      <hr className="text-zinc-300 mt-5" />
      <h1 className="font-bold px-2 py-2 text-xl pt-5 pb-2">You</h1>
      <ul>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <GoHistory /> History
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <CgPlayList /> Playlist
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <GoVideo /> Your Videos
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <MdOutlineWatchLater /> Watch Later
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <AiOutlineLike /> Liked Videos
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <GrChannel /> Your Channel
        </li>
      </ul>
      <hr className="text-zinc-300 mt-5" />
      <h1 className="font-bold px-2 py-2 pt-5 pb-2 text-xl">Subscriptions</h1>
      <ul>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <RiMusicLine /> Music
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <MdSportsBasketball /> Sports
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <GrGamepad /> Gaming
        </li>
        <li className="px-2 py-2 font-medium text-lg flex items-center gap-7">
          <RiMovie2Line /> Movies
        </li>
      </ul>
      <hr className="text-zinc-300 mt-5" />
    </div>
  );
};

export default Sidebar;
