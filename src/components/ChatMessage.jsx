import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <FaRegCircleUser className="w-4 h-4" />
      <span className="text-[14px] font-semibold">{name}</span>
      <span className="text-[13px]">{message}</span>
    </div>
  );
};

export default ChatMessage;
