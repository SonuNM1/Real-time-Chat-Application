import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast" ; // for displaying notifications


// Signup Component

const Signup = () => {
  // State for managing form data 
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate() ; // hook for navigation 

  // function to handle checkbox selection for gender 

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender: gender });
  };

  // function to handle form submission 

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // prevent default form submission 
    try {
      // Send POST request to register user
      const res = await axios.post(
        `http://localhost:5000/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      // if registration is successful, redirect to login page and show success toast

      if(res.data.success){
        navigate("/login") // redirect to login page
        toast.success(res.data.message) ; // show success toast
      }
    } catch (error) {
      toast.error(error.response.data.message) ; // if an error occurs, show error toast and log error 
      console.log(error);
    }

    // reset form fields after submission 

    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-w-96 mx-auto">
      {/* Container for signup form */}

      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
        {/* Signup heading */}

        <h1 className="text-3xl font-bold text-center text-black ">Signup</h1>

        {/* Signup Form */}

        <form onSubmit={onSubmitHandler} action="">
          {/* Full name input field */}

          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full input input-bordered h-10 "
              type="text"
              placeholder="Enter your full name"
            ></input>
          </div>

          {/* Username input field */}

          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input input-bordered h-10 "
              type="text"
              placeholder="Enter your username"
            ></input>
          </div>

          {/* Password input field */}

          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10 "
              type="password"
              placeholder="Enter your password"
            ></input>
          </div>

          {/* Confirm Password input field */}

          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full input input-bordered h-10 "
              type="password"
              placeholder="Re-enter your password"
            ></input>
          </div>

          {/* Gender selection check-boxes */}

          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "Male"}
                onChange={() => handleCheckbox("Male")}
                defaultChecked
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === "Female"}
                onChange={() => handleCheckbox("Female")}
                defaultChecked
                className="checkbox mx-2"
              />
            </div>
          </div>

          {/* Already have an account message with login link */}

          <div className="w-full mx-auto flex items-center text-center">
            <p className="text-center my-2 ">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>

          {/* Signup button */}

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 border border-slate-700"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
