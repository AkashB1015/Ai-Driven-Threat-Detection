import React, { useState, useEffect } from "react";

import "../deshboard.css";
const Settings = () => {
  useEffect(() => {
    const texts = ["You are safe", "Total Security"];
    let textIndex = 0;
    let i = 0;
    let isDeleting = false;
    const speed = 100;
    const delay = 1500;
    const h1 = document.querySelector(".specific-h1");

    const typeEffect = () => {
      let currentText = texts[textIndex];
      if (!isDeleting) {
        h1.textContent = currentText.substring(0, i);
        i++;
      } else {
        h1.textContent = currentText.substring(0, i);
        i--;
      }
      if (i > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delay);
      } else if (i < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
      } else {
        setTimeout(typeEffect, speed);
      }
    };
    setTimeout(typeEffect, 1000);
  }, []);


  return (
    <div className="content11">
      <div className="safe">
        <h1 className="specific-h1">You are safe</h1>
      </div>
      <p className="move_fix">Defending your data, shielding your device.</p>
      <br /><br /><br />

      <div className="security-options">
        
        <div className="option large"><img src="public/System _Scan.svg" className="quick Scan"  /> Quick Scan</div>
        <div className="option large"><img src="public/password_p.svg" className="quick Scan" /> Password Protection</div>
        <div className="option large"><img src="public/Vulnerability_Scan.svg" className="quick Scan" /> Vulnerability Scan</div>
        <div className="option large"><img src="public/web_p.svg" className="quick Scan"  /> Browsing Protection</div>
        <div className="option large"><img src="public/Email_p.svg" className="quick Scan"  /> Email Protection</div>
        <div className="option large"><img src="public/oneclick.svg" className="quick Scan"  /> OneClick Optimizer</div>
      
      </div>
    </div>
  );
};

export default Settings;
