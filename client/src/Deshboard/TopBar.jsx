
import logo from "../assets/Syscure_logo.svg";
import "./deshboard.css";
import profile from "../assets/profile1.svg";

import Logout from "../assets/logout.svg";
// import {useState} from "react";
// import React, { useState, useEffect, useRef } from "react";
import React, { useState, useEffect, useRef } from "react";


const TopBar = () => {
  const [profileVisible, setProfileVisible] = useState(false);
  const profileRef = useRef(null);

  const toggleProfile = (event) => {
    event.stopPropagation();
    setProfileVisible((prev) => !prev);
  };

  useEffect(() => {
    const closeProfile = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileVisible(false);
      }
    };
    document.addEventListener("click", closeProfile);
    return () => document.removeEventListener("click", closeProfile);
  }, []);

  return (
    <div className="top-bar">
      <div>
        <img src={logo} className="shild1" alt="Syscure Logo" />
        <h1 className="syscure_add">Syscure</h1>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/service">Services</a>
        <a href="/contact">Contact</a>
      </div>
      
      <div className="profile-container" ref={profileRef}>
        <div className="profile-wrapper">
          <input type="checkbox" id="profile-toggle" />
          <label className="profile-icon" id="profile-icon" htmlFor="profile-toggle" onClick={toggleProfile}>
            <img src={profile} alt="Profile" />
          </label>
          {profileVisible && (

            <div className="profile-card" id="profile-card">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    document.getElementById("profile-img").src = imageUrl; // Update profile image
                  }
                }}
                style={{ display: "none" }}
                id="profile-upload"
              />
              <label htmlFor="profile-upload">
                <img
                  id="profile-img"
                  src={profile} // Default profile image
                  alt="User"
                  style={{ cursor: "pointer" }}
                />
              </label>
              <h3>John Doe</h3>
              <p>Email: abc@gmail.com</p>
              <a href="#" className="logoutbtn">
                <b className="bolt_log">Logout</b>
                <img src={Logout} className="logimg" alt="Logout" />
              </a>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
