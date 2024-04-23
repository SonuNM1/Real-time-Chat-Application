import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
        <h1 className="text-3xl font-bold text-center text-black ">Signup</h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Full Name</span>
            </label>
            <input
              className="w-full input input-bordered h-10 "
              type="text"
              placeholder="Enter your full name"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              className="w-full input input-bordered h-10 "
              type="text"
              placeholder="Enter your username"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10 "
              type="text"
              placeholder="Enter your password"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text ">Confirm Password</span>
            </label>
            <input
              className="w-full input input-bordered h-10 "
              type="text"
              placeholder="Re-enter your password"
            ></input>
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
          </div>
          <div className="w-full mx-auto flex items-center text-center">
            <p className="text-center">
              Already have an account? <Link to="/login">Signup</Link>
            </p>
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
