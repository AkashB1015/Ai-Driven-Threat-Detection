import { useState, useEffect } from "react";
import "../deshboard.css"; // Fixed import typo
import "./side.css";

const Privacy = () => {
  const [proxyEnabled, setProxyEnabled] = useState(true);
  const [firewallEnabled, setFirewallEnabled] = useState(true);
  const [downloadSpeed, setDownloadSpeed] = useState(22.5);
  const [uploadSpeed, setUploadSpeed] = useState(4.8);
  const [activeConnections, setActiveConnections] = useState(8);
  const [latency, setLatency] = useState(65);
  const [dataTransferred, setDataTransferred] = useState(1.8);
  const [uptime, setUptime] = useState("1d 0h 0m");

  // Simulate real-time updates (Mocking API calls)
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadSpeed((prev) => parseFloat((prev + Math.random()).toFixed(1)));
      setUploadSpeed((prev) => parseFloat((prev + Math.random()).toFixed(1)));
      setLatency((prev) => Math.max(50, parseFloat((prev + (Math.random() * 10 - 5)).toFixed(0))));
      setDataTransferred((prev) => parseFloat((prev + Math.random() * 0.1).toFixed(2)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container1">
      <h1>Proxy & Firewall Control Panel</h1>
      <p>Manage your network security settings and monitor connection status</p>

      {/* System Status */}
      <div className="status-section">
        <div className="status-card">
          <h3>Proxy Server</h3>
          <p>Proxy Connection</p>
          <p className={`status-text ${proxyEnabled ? "online" : "offline"}`}>
            {proxyEnabled ? "Online" : "Offline"}
          </p>
          <label className="switch">
            <input
              type="checkbox"
              checked={proxyEnabled}
              onChange={() => setProxyEnabled(!proxyEnabled)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="status-card">
          <h3>Firewall Protection</h3>
          <p>Firewall Status</p>
          <p className={`status-text ${firewallEnabled ? "online" : "offline"}`}>
            {firewallEnabled ? "Online" : "Offline"}
          </p>
          <label className="switch">
            <input
              type="checkbox"
              checked={firewallEnabled}
              onChange={() => setFirewallEnabled(!firewallEnabled)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Connection Statistics */}
      <div className="connection-section">
        <div className="network-speed">
          <h3>Network Speed</h3>
          <p>Download: {downloadSpeed} Mbps</p>
          <p>Upload: {uploadSpeed} Mbps</p>
        </div>

        <div className="connection-details">
          <h3>Connection Details</h3>
          <p>Active Connections: {activeConnections}</p>
          <p>Latency: {latency} ms</p>
        </div>
      </div>

      {/* Data & Uptime */}
      <div className="stats-section">
        <div className="data-transferred">
          <h3>Data Transferred</h3>
          <p>{dataTransferred} GB Today</p>
        </div>

        <div className="system-uptime">
          <h3>System Uptime</h3>
          <p>{uptime} Since last restart</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
