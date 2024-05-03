
import {configureStore} from "@reduxjs/toolkit" ; 
import userReducer from "./userSlice";
import messageReducer from "./messageSlice" ; 
import socketReducer from "./socketSlice" ; 

const store = configureStore({
    reducer:{
        user: userReducer,
        messge: messageReducer,
        socket: socketReducer
    }
}) ; 

export default store ; 