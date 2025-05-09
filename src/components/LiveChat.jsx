import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomString } from "../utils/helper";

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
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="border-1 bg-gray-100 border-gray-300 w-full h-[500px] overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
