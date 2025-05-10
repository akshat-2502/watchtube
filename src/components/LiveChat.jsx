import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomString } from "../utils/helper";
import { FiSend } from "react-icons/fi";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API POLLING
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomString(25),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="border-1 bg-gray-100 border-gray-300">
        <div className=" w-full h-[456px] overflow-y-scroll flex flex-col-reverse">
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
        <hr className="text-zinc-400" />
        <div className="flex items-center">
          <input
            placeholder="Type Here ..."
            className=" p-2 outline-none border-zinc-500 w-[85%]"
            type="text"
          />
          <button className="hover:cursor-pointer">
            <FiSend className="w-6 h-6 text-zinc-400 hover:text-zinc-600" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
