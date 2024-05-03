
import {combineReducers, configureStore} from "@reduxjs/toolkit" ; 
import userReducer from "./userSlice";
import messageReducer from "./messageSlice" ; 
import socketReducer from "./socketSlice" ; 

// Redux persist 

import { 
    persistReducer, 
    FLUSH,
    REHYDRATE, 
    PAUSE, 
    PERSIST,
    PURGE, 
    REGISTER,
} from "react-persist" ; 
import storage from "redux-persist/lib/storage" ; 

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    user: userReducer,
    messge: messageReducer,
    socket: socketReducer
})

const persistReducer = persistReducer(persistConfig, rootReducer) ; 

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

export default store ; 