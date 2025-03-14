import React, { useState } from "react";
import "./login.css";
// import App from "../App";

// check password then login

const AuthForm = () => {
  const [activeForm, setActiveForm] = useState("login"); // login, signup, forgot
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
    newPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: for my side", formData);
    alert(`${activeForm} form submitted!`);
  };

  return (
    <div className="loginpage1">
      <div className="container">
        <div className="auth-section">
          <h1 className="syscure-logo">Syscure</h1>
          <form onSubmit={handleSubmit}>

            {activeForm === "signup" && (
              
              <div className="input-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {/* input email login  ----------------------------------------*/}

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* user login  */}
            {(activeForm === "login" || activeForm === "signup") && (
              <div className="input-group">
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"} Password
                </button>
              </div>
            )}

            {/* forgot password------------------------------------------------------------- */}
            {activeForm === "forgot" && (
              <>
                <div className="input-group">
                  <label>OTP</label>
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>New Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    placeholder="Include uppercase, number & symbol"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            {/* toggle the all links in js  */}
            <button type="submit" className="btn">
              {activeForm === "login" ? "Sign In" : activeForm === "signup" ? "Sign Up" : "Reset Password"}
            </button>
          </form>
          <p className="toggle-link">
            {activeForm === "login" ? (
              <>
                Forgot Password? <span onClick={() => setActiveForm("forgot")}>Recover here.</span>
                <br /> Don't have an account? <span onClick={() => setActiveForm("signup")}>Sign Up.</span>
              </>
            ) : activeForm === "signup" ? (
              <>Already have an account? <span onClick={() => setActiveForm("login")}>Sign In.</span></>
            ) : (
              <>Remembered your password? <span onClick={() => setActiveForm("login")}>Sign In.</span></>
            )}
          </p>
        </div>

        <div className="info-section">
          <img src="Syscure_logo.svg" className="logo1" alt="Syscure Logo" />
          <p>AI-Driven Threat Detection Enhances Real-time Security Monitoring.</p>
          <h4>~ Data Protection & Privacy</h4>
        </div>
      </div>
    </div>
  );
};



export default AuthForm;
