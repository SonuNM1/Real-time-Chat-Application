import React, { useEffect, useRef } from "react";

 const Message = ({message}) => {
  const scroll = useRef() ; 
  useEffect(()=>{
  scroll.current?.scrollIntoView({behaviour:"smotth"})
  }, [message]) ; 
  return (
    <div ref={scroll} className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-header">
        <time className="text-xs opacity-50 tet-white ">12:45</time>
      </div>
      <div className="chat-bubble">{message?.message}</div>
      <div className="chat-footer opacity-50"></div>
    </div>
  );
};

export default Message;
