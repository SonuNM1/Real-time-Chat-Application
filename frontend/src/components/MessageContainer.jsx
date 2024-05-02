import React, { Profiler } from "react";
import { SendInput } from "./SendInput";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const {selectedUser} = useSelector(store=>store.user) ; 
  return (
    <div className="md:min-2-[550px] flex flex-col" >
        <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2 ">
          <div className="avatar online">
            <div className="w-12 rounded-full ">
              <img
                src={selectedUser?profilePhoto: ''}
                alt="profile"
              ></img>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between  gap-2">
              <p>{selectedUser?selectedUser.fullName : ''}</p>
            </div>
          </div>
      </div>
      <Messages/>
      <SendInput/>
    </div>
  );
};

export default MessageContainer;
