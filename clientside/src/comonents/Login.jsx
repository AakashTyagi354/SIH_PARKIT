import React from "react";
import clipart172157 from '../utils/clipart172157.png';
import image from '../utils/toppng.com-red-top-view-clip-art-at-clker-cartoon-car-birds-eye-view-600x300.png'
import image2 from '../utils/clipart651151.png'


export const Login = () => {
  return (
    <div className="Login-main">
      <div className="left">
        <div className="standing" >
          <img src="https://i.ebayimg.com/images/g/GeYAAOSwRUJeu2WW/s-l1200.webp" width='100%' height='100%' alt="" />
        </div>
        <div className="parked1">
           <img src={clipart172157} alt="Racing Car - Cartoon Car Top View@clipartmax.com" width={320}/>
        </div>
        <div className="parked2">
          <img src={image} alt="Racing Car - Cartoon Car Top View@clipartmax.com" width={320}/>
        </div>
        <div className="parked3">
          <img src={image2} alt="Racing Car - Cartoon Car Top View@clipartmax.com" width={320}/>
        </div>
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
