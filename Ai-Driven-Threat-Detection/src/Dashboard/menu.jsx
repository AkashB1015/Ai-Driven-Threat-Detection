import { useState, useEffect } from "react";
import React from "react";
import "./menu.css";

import syscureLogo from "./public/Syscure_logo";
import profileIcon from "../public/profile1.svg";
import systemScan from "../public/System Scan.svg";
import passwordProtection from "../public/password_p.svg";
import vulnerabilityScan from "../public/Vulnerability_Scan.svg";
import webProtection from "../public/web_p.svg";
import emailProtection from "../public/Email_p.svg";
import oneClickOptimizer from "../public/oneclick.svg";

const TopBar = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
      <div className="top-bar">
          <div className="logo-container">
              <img src={syscureLogo} className="shild1" alt="Syscure Logo" />
              <h1 className="syscure_add">Syscure</h1>
          </div>
          <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
          </div>
          <div className="profile-container" onClick={() => setProfileOpen(!profileOpen)}>
              <img src="public/profile1.svg" className="profile-icon" alt="Profile" />
              {profileOpen && (
                  <div className="profile-card">
                      <img src="public/profile1.svg" alt="User" />
                      <h3>John Doe</h3>
                      <p>Email: abc@gmail.com</p>
                      <a href="login page/login.html">Sign in</a>
                  </div>
              )}
          </div>
      </div>
  );
};

const Sidebar = () => {
  return (
      <div className="left-sidebar">
          <ul>
              <li className="active">
                  <img src="public/Syscure_logo.svg" className="shild" alt="" />
              </li>
              <li className="img_color"><img src="assets/dashboard.svg" alt="" />Dashboard</li>
              <li className="img_color"><img src="assets/protection.svg" alt="" />Protection</li>
              <li className="img_color"><img src="assets/Privacy.svg" alt="" />Advanced Privacy</li>
              <li className="img_color"><img src="assets/backup_f.svg" alt="" />Backup Files</li>
              <li className="img_color"><img src="assets/Data Alert.svg" alt="" />Data Breach Alert</li>
              <li className="img_color"><img src="assets/Notifications.svg" alt="" />Notifications</li>
              <li className="img_color"><img src="assets/settings.svg" alt="" />Settings</li>
          </ul>
      </div>
  );
};

const MainContent = () => {
  const texts = ["You are safe", "Total Security"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
      const currentText = texts[textIndex];
      let timeout;

      if (!isDeleting) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
          if (displayedText.length + 1 === currentText.length) {
              timeout = setTimeout(() => setIsDeleting(true), 1500);
          } else {
              timeout = setTimeout(() => {}, 100);
          }
      } else {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
          if (displayedText.length === 0) {
              setIsDeleting(false);
              setTextIndex((prev) => (prev + 1) % texts.length);
          }
          timeout = setTimeout(() => {}, 50);
      }
      return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  return (
      <div className="content">
          <div className="safe">
              <h1 className="specific-h1">{displayedText}</h1>
          </div>
          <p className="move_fix">Defending your data, shielding your device.</p>
          <div className="security-options">
              <div className="option large"><img src="public/System Scan.svg" alt="" />Quick Scan</div>
              <div className="option large"><img src="public/password_p.svg" alt="" />Password Protection</div>
              <div className="option large"><img src="public/Vulnerability_Scan.svg" alt="" />Vulnerability Scan</div>
              <div className="option large"><img src="public/web_p.svg" alt="" />Browsing Protection</div>
              <div className="option large"><img src="public/Email_p.svg" alt="" />Email Protection</div>
              <div className="option large"><img src="public/oneclick.svg" alt="" />OneClick Optimizer</div>
          </div>
      </div>
  );
};

const SyscureApp = () => {
  return (
      <div>
          <TopBar />
          <div className="main-container">
              <Sidebar />
              <MainContent />
          </div>
      </div>
  );
};

export default SyscureApp;
