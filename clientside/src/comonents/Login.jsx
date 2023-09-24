import React from "react";
import hero from '../utils/Parking-pana.png'
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="Login-main">
      <div className="left">
        <img src={hero} alt="hero" />
      </div>
      <div className="right">
        <form className="form">
          <div className="heading">
            <h1>Login</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div id="emailHelp" className="form-text">
            Haven't Registered yet ? Register Now
            <Link to="/register">
              <a href="/home">Register</a>
            </Link>
          </div>
          <button type="submit" className="btn btn-danger non-hover">
            <a href="/home">Submit</a>
          </button>
        </form>
      </div>
    </div>
  );
};
