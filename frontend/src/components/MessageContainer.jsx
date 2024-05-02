import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendInput } from "./SendInput";
import Messages from "./Messages";
import { setAuthUser, setSelectedUser } from "../redux/userSlice";

const MessageContainer = () => {
  const { selectedUser } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);

  return (
    <>
      {selectedUser != null ? (
        <div className="md:min-2-[550px] flex flex-col">
          <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src={selectedUser.profilePhoto || ""} alt="profile" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between gap-2">
                <p>{selectedUser.fullName}</p>
              </div>
            </div>
          </div>
          <Messages />
          <SendInput />
        </div>
      ) : (
        <div className="md:min-2-[550px] flex flex-col justify-center items-center " >
          <h1 className="text-4xl text-white font-bold" >Hi, {setAuthUser.fullName}</h1>
          <h1 className="text-2xl text-white">Let's start conversation</h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
