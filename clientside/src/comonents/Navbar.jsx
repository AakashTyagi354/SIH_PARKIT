import React from "react";
import logo from "../utils/Screenshot_2023-09-23_at_8.28.59_PM-removebg-preview (1).png";

import "../styles/styles.css";

const Navbar = () => {
  return (
    <div className="Nav-main">
      <div className="logo">
        <img style={{
          height:"5vh"
        }} src={logo} alt="" />
      </div>
      <div className="pages non-hover">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/report">Report</a>
      </div>
      <div className="log"></div>
    </div>
  );
};

export default Navbar;
