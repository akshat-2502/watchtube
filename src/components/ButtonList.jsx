import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Cricket",
    "React",
    "JavaScript",
    "Movies",
    "Cars",
    "Football",
    "Projects",
    "Redux",
    "ThreeJs",
    "Live",
    "News",
    "Racing",
  ];

  return (
    <div className="flex">
      {list.map((title, index) => (
        <Button key={index} name={title} />
      ))}
    </div>
  );
};

export default ButtonList;
