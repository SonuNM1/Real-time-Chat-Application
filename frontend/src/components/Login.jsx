import React, { setUser, useState } from "react";
import { Link } from "react-router-dom";

// Login Component

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      {/* Container for login form */}

      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 ">
        {/* Login heading */}

        <h1 className="text-3xl font-bold text-center text-black ">Login</h1>

        {/* Login Form */}

        <form onSubmit={onSubmitHandler} action="">

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

          {/* Already have an account message with signup link */}

          <div className="w-full mx-auto flex items-center text-center">
            <p className="text-center my-2 ">
              Don't have an account? <Link to="/register">Signup</Link>
            </p>
          </div>

          {/* Login button */}

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2 border border-slate-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
