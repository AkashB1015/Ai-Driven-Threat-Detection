import React from "react";
import "./deshboard.css";
const Dashboard = () => {
  return<div className="security-options">
            
            <div className="option large"><img src={System_Scan} className="quick Scan"  /> Quick Scan</div>
            <div className="option large"><img src="public/password_p.svg" className="quick Scan" /> Password Protection</div>
            <div className="option large"><img src="public/Vulnerability_Scan.svg" className="quick Scan" /> Vulnerability Scan</div>
            <div className="option large"><img src="public/web_p.svg" className="quick Scan"  /> Browsing Protection</div>
            <div className="option large"><img src="public/Email_p.svg" className="quick Scan"  /> Email Protection</div>
            <div className="option large"><img src="public/oneclick.svg" className="quick Scan"  /> OneClick Optimizer</div>
          
          </div>
};

export default Dashboard;
