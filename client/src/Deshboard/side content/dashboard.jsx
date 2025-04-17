import React, { useState, useEffect } from "react";
import "../deshboard.css";
import "./side.css"
const features = [
  {
    title: "System Protection",
    icon: "/System _Scan.svg",
    description: "Blocks threats in real-time to safeguard your device from malware and unauthorized access.",
    linkText: "Open",
    toggle: false,
  },
  {
    title: "Advanced Threat Defense",
    icon: "/Vulnerability_Scan.svg",
    description: "Detects and prevents zero-day attacks by analyzing suspicious behavior on your system.",
    linkText: "Open",
    toggle: false,
  },
  {
    title: "Malware Scan",
    icon: "/oneclick.svg",
    description: "Scans and removes malware, ransomware, and other security threats from your device.",
    linkText: "Settings",
    toggle: true,
  },
  {
    title: "Online Threat Prevention",
    icon: "/web_p.svg",
    description: "Blocks malicious websites and online threats using a cloud-based protection system.",
    linkText: "Settings",
    toggle: false,
  },
  {
    title: "Proxy Server",
    icon: "/Vulnerability_Scan.svg",
    description: "Routes your network traffic through a proxy server for enhanced security and privacy.",
    linkText: "Open",
    toggle: true,
    proxyServer: "http://your-proxy-server.com:8080", // Optional field for proxy configuration
  },
  {
    title: "Firewall",
    icon: "/password_p.svg",
    description: "Monitors and controls app connections to prevent unauthorized network access.",
    linkText: "Settings",
    toggle: true,
  },
];

function adjustHeight() {
  document.querySelector('.dashboard-container').style.height = window.innerHeight + 'px';
}

// Adjust height on load and when resizing the window
window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);
const Dashboard = () => {
  const [toggleStates, setToggleStates] = useState(
    features.map((feature) => feature.toggle)
  );
  
  const handleToggle = (index) => {
    const newStates = [...toggleStates];
    newStates[index] = !newStates[index];
    setToggleStates(newStates);
  };
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
          <div className="threat-detection-board">
      {features.map((feature, index) => (
        <div key={index} className="threat-card">
          <div className="card-header">
            <img src={feature.icon} alt={feature.title} className="icon" />
            <h3>{feature.title}</h3>
          </div>
          <p className="card-description">{feature.description}</p>
          <div className="card-footer">
            <a href="#" className="card-link">{feature.linkText}</a>
            {feature.toggle && (
              <label className="switch">
                <input
                  type="checkbox"
                  checked={toggleStates[index]}
                  onChange={() => handleToggle(index)}
                />
                <span className="slider round"></span>
              </label>
            )}
          </div>
        </div>
      ))}
    </div>
        </div>
      );
};

export default Dashboard;
