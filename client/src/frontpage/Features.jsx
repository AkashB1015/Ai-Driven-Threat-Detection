import React from "react";
import "./page.css";

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container123" >
                <h2>Key Features</h2>
                <div className="feature-grid">
                    <div className="feature-item">
                        <img src="images/11.svg" className="card-img" alt="Real-time Protection" />
                        <h3>Real-time Protection</h3>
                        <p>24/7 protection against viruses, malware, and ransomware.</p>
                    </div>
                    <div className="feature-item">
                        <img src="images/9.svg" className="card-img" alt="Fast Scans" />
                        <h3>Fast Scans</h3>
                        <p>Quick and efficient scans without slowing down your device.</p>
                    </div>
                    <div className="feature-item">
                        <img src="images/5.svg" className="card-img" alt="Privacy Protection" />
                        <h3>Privacy Protection</h3>
                        <p>Secure your personal data and online activities.</p>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default Features;
