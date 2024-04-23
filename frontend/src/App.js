
import Signup from "./components/Signup" ;
import './App.css'; 
import HomePage from "./components/HomePage" ; 
import Login from "./components/Login" ; 

import {createBrowserRouter, RouterProvider} from "react-router-dom" ; 

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
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
