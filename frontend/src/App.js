
import Signup from "./components/Signup" ;
import './App.css'; 
import HomePage from "./components/HomePage" ; 
import Login from "./components/Login" ; 

import {createBrowserRouter, RouterProvider} from "react-router-dom" ; 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client" ; 
import { setOnlineUsers } from "./redux/userSlice";
import { setSocket } from "./redux/socketSlice";

// createBrowserRouter function to define routes

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/> // render HomePage component when the path is /
  }, 
  {
    path:"/register",
    element: <Signup/>
  }, 
  {
    path:"/login",
    element: <Login/>
  }, 
])

// App component

function App() {

  const {authUser} = useSelector(store=>store.user) ; 
  const {socket} = useSelector(store=>store.socket) ; 
  const dispatch = useDispatch() ; 

  useEffect(()=>{
    if(authUser){
      const socket = io("http://localhost:8080", {
      query: {
        userId: authUser._id
      }
      }) ; 
      dispatch(setSocket(socket)); 

      socket.on("getOnlineUsers", (onlineUsers)=>{
        dispatch(setOnlineUsers(onlineUsers))
      });
      return ()=> socket.close() ; 
    } else{
      if(socket){
        socket.close() ; 
        dispatch(setSocket(null))
      }
    }
  },[authUser]) ; 

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
