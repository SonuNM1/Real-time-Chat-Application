import React from "react";
import { IoMdSend } from "react-icons/io";

export const SendInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a Message ..."
          className="border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white"
        ></input>
        <button className="absolute flex inset-y-0 end-0 items-center pr-4 ">
          <IoMdSend />
        </button>
      </div>
    </form>
  );
};
