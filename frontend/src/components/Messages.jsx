import React from "react";
import Message from "./Message";
import { useGetMessages } from "../hooks/useGetMessages";

export const Messages = () => {
  useGetMessages() ; 
  return (
    <div className="px-4 flex-1 overflow-auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};
