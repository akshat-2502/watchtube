import React from "react";

const Button = ({ name }) => {
  return (
    <div className="p-1">
      <button className="px-3 hover:cursor-pointer hover:bg-zinc-300 m-1 py-2 text-sm bg-zinc-200 font-bold rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
