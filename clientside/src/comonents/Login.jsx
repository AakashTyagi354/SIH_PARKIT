import React from "react";

export const Login = () => {
  return (
    <div className="Login-main">
      <div className="left">
        <img src="" alt="pole" className="standing" />
      </div>
        <img src="" alt="car" className="car" />
      <div className="right">
        <form className="form">
          <div className="heading">
            <h1>Login</h1>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
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
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div id="emailHelp" className="form-text">
              Haven't Registered yet ? Register Now <a href="/home">Register</a>
            </div>
          <button type="submit" className="btn btn-danger non-hover">
            <a href="/home">Submit</a>
          </button>
        </form>
      </div>
    </div>
  );
};
