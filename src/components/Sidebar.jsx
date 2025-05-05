import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 w-48 shadow-lg h-screen">
      <ul>
        <li className="px-2 py-1 font-medium text-lg">Home</li>
        <li className="px-2 py-1 font-medium text-lg">Shorts</li>
        <li className="px-2 py-1 font-medium text-lg">Videos</li>
        <li className="px-2 py-1 font-medium text-lg">Live</li>
      </ul>
      <h1 className="font-bold px-2 py-1 text-xl pt-5 pb-2">You</h1>
      <ul>
        <l1 className="px-2 py-1 font-medium text-lg">History</l1>
        <li className="px-2 py-1 font-medium text-lg">Playlist</li>
        <li className="px-2 py-1 font-medium text-lg">Your Videos</li>
        <li className="px-2 py-1 font-medium text-lg">Watch Later</li>
        <li className="px-2 py-1 font-medium text-lg">Liked Videos</li>
        <li className="px-2 py-1 font-medium text-lg">Your Channel</li>
      </ul>
      <h1 className="font-bold px-2 py-1 pt-5 pb-2 text-xl">Subscriptions</h1>
      <ul>
        <l1 className="px-2 py-1 font-medium text-lg">Music</l1>
        <li className="px-2 py-1 font-medium text-lg">Sports</li>
        <li className="px-2 py-1 font-medium text-lg">Gaming</li>
        <li className="px-2 py-1 font-medium text-lg">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
