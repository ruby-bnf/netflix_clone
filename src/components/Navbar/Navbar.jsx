import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY >= 90) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  window.addEventListener("scroll", changeBgColor);

  return (
    <div className={bgColor ? "navbar navbar-darkBg" : "navbar"}>
      <div className="navbar-left">
        <img src={logo} alt=""></img>
        <ul>
          <li>Home</li>
          <li>Tv shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Langauge</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <>Sighn Out of Netflix</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
