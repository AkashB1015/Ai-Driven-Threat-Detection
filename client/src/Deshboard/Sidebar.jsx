import React, { useState, useEffect } from "react";
import "./deshboard.css";

const Sidebar = () => {
    return (
      <div className="left-sidebar">
        <ul>
          <li className="active">
            <img src="public/Syscure_logo.svg" className="shild" alt="" />
          </li>
          <br />
          <li className="img_color"><img src="sidebar img/dashboard.svg" alt="" />Dashboard</li>
          <li className="img_color"><img src="sidebar img/protection.svg" alt="" /> Protection</li>
          <li className="img_color"><img src="sidebar img/Privacy.svg" alt="" /> Advanced Privacy</li>
          <li className="img_color"><img src="sidebar img/backup_f.svg" alt="" />Backup Files</li>
          <li className="img_color"><img src="sidebar img/Data Alert.svg" alt="" /> Data Breach Alert</li>
          <li className="img_color"><img src="sidebar img/Notifications.svg" alt="" />Notifications</li>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <li className="img_color"><img src="sidebar img/settings.svg" alt="" />Settings</li>
        </ul>
      </div>
    );
  };
  export default Sidebar;