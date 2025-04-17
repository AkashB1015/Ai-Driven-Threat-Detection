import React, { useState } from "react";
import "./deshboard.css";
import Dashboard from "./side content/dashboard";
import Privacy from "./side content/Privacy";
import DataAlert from "./side content/DataAlert";
import Notifications from "./side content/Notifications";
import Filescan from "./side content/filescan";
import Setting  from "./side content/Settings";

const Sidebar = () => {
  const [activeFeature, setActiveFeature] = useState("Dashboard");

  const handleMenuClick = (feature) => {
    setActiveFeature(feature);
  };

  const renderFeature = () => {
    switch (activeFeature) {
      case "Dashboard":
        return <Dashboard />;
      case "Files scan":
        return <Filescan />;
      case "Data Breach Alert":
        return <DataAlert />;
      case "Notifications":
        return <Notifications />;
      case "Advanced Privacy":
        return <Privacy />;
      case "Settings":
        return <Setting />;
      default:
        return <h2>Select a feature</h2>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="left-sidebar">
        <ul>
          <li className="active">
            <img src="public/Syscure_logo.svg" className="shild" alt="Syscure Logo" />
          </li>
          <br />

          <li className="img_color" onClick={() => handleMenuClick("Dashboard")}>
            <img src="sidebar img/dashboard.svg" alt="" />Dashboard
          </li>

          <li className="img_color" onClick={() => handleMenuClick("Files scan")}>
            <img src="sidebar img/scanfile.svg" alt="" /> Files Scan
          </li>

          <li className="img_color" onClick={() => handleMenuClick("Advanced Privacy")}>
            <img src="sidebar img/Privacy.svg" alt="" />Privacy
          </li>

          <li className="img_color" onClick={() => handleMenuClick("Data Breach Alert")}>
            <img src="sidebar img/Data Alert.svg" alt="" /> Data Breach Alert
          </li>

          <li className="img_color" onClick={() => handleMenuClick("Notifications")}>
            <img src="sidebar img/Notifications.svg" alt="" />Notifications
          </li>
        
          <li className="img_color" onClick={() => handleMenuClick("Settings")}>
            <img src="sidebar img/settings.svg" alt="" />firewall
          </li>

        </ul>
        
      </div>
      <div className="feature-content">
        {renderFeature()}
      </div>
    </div>
    
  );
};

export default Sidebar;