import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers' ; 

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col" >
      <form action="" className="flex items-center gap-2 ">
        <input
          className="input input-bordered rounded-md"
          placeholder="Search..."
          type="text"
        />
        <button type="submit" className="btn bg-zinc-600 text-white ">
          <BiSearchAlt2 className="w-6 h-6 outline-none " />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers/>
      <div className="mt-2" >
        <button className="btn btn-sm" >Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
