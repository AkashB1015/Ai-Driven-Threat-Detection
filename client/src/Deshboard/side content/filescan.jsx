import { useState, useRef, useEffect } from "react";
import { UploadCloud, RefreshCw } from "lucide-react";
import "../deshboard.css";

const FileScan = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [scanning, setScanning] = useState(false);
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      startScan();
    }
  };

  // Handle drag and drop
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      startScan();
    }
  };

  // Prevent default drag behaviors
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // Simulate scanning process
  const startScan = () => {
    setScanning(true);
    setProgress(0);
    let scanInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(scanInterval);
          setScanning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="container21">
      <h1 className="title">File Security Scanner</h1>
      <p className="subtitle">
        Upload, scan, and analyze your files for security threats or content validation.
      </p>

      <div className="card">
        <h2 className="card-title">File Security Scanner</h2>

        {/* Drag & Drop Area */}
        <div
          className="upload-box"
          onClick={() => fileInputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <UploadCloud size={40} className="upload-icon" />
          <p className="upload-text">Drag & Drop File</p>
          <p className="upload-subtext">Drop your file here, or click to browse</p>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf, .jpeg, .jpg, .png, .txt"
            className="file-input"
          />
          <button className="upload-button">Select File</button>
        </div>

        {file && (
          <div className="scan-status">
            <p className="selected-file">Scanning {file.name}...</p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <p>{progress.toFixed(2)}%</p>
            {scanning && <p>Analyzing file contents and checking for threats...</p>}
          </div>
        )}
      </div>

      <p className="footer-text">Secure scanning service. Files are not stored on our servers.</p>
      <p className="footer-copyright">© 2025 File Security Scanner. All rights reserved.</p>
    </div>
  );
};

export default FileScan;

