import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex-1 flex-row">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
