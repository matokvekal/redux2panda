import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./navbar.css";
import panda from "../../Assets/panda.jpg";

const Navbar = () => {
  const name = useSelector((state) => state.user.userInfo.name);
  console.log("navbar rendered!");
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Panda App</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src={panda}
            alt=""
          />
          <span className="navbarName">{name}</span>
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
