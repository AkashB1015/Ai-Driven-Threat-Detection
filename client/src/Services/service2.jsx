import React from "react";
import "./services.css";
import { FaShieldAlt, FaBug, FaLock, FaNetworkWired } from "react-icons/fa";

const content1 = () => {
  return (
    <div className="threat-detection-container">
      <h5 className="section-title">Our Service</h5>
      <h2 className="main-heading">Advanced Threat Detection & Prevention</h2>
      <p className="description">
        We utilize cutting-edge security measures to identify, analyze, and neutralize potential cyber threats. Our solutions are designed to safeguard your systems from emerging risks.
      </p>

      <div className="features-grid">
        <div className="feature-box">
          <FaShieldAlt className="icon" />
          <h3>Real-Time Protection</h3>
          <p>Continuous monitoring and immediate response to security threats.</p>
        </div>

        <div className="feature-box">
          <FaBug className="icon" />
          <h3>Vulnerability Assessment</h3>
          <p>Identify weak points in your system before hackers exploit them.</p>
        </div>

        <div className="feature-box">
          <FaLock className="icon" />
          <h3>Data Encryption</h3>
          <p>Protect sensitive information with end-to-end encryption.</p>
        </div>

        <div className="feature-box">
          <FaNetworkWired className="icon" />
          <h3>Network Security</h3>
          <p>Advanced firewall and intrusion detection systems to prevent attacks.</p>
        </div>
      </div>
    </div>
  );
};

export default content1;
