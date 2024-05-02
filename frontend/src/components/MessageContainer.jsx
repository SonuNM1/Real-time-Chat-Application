import React from "react";
import { SendInput } from "./SendInput";

const MessageContainer = () => {
  return (
    <div className="md:min-2-[550px] flex flex-col" >
        <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2 ">
          <div className="avatar online">
            <div className="w-12 rounded-full ">
              <img
                src="https://img.freepik.com/premium-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503791.jpg"
                alt="profile"
              ></img>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between  gap-2">
              <p>Patel MERNStack</p>
            </div>
          </div>
      </div>
      <Messages/>
      <SendInput/>
    </div>
  );
};

export default MessageContainer;
