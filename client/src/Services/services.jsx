import React from "react";
import "./services.css";


const services1 = () => {
    return (
        <div className="div_container">
            <img src="/public/img11.png" className="image-section" />

            <div className="text-section">
                <h1>
                    <span className="highlight">Simplify</span> Threat Detection, Investigation, and Response.
                </h1>
                <ul>
                    <li>✔ Detect cyber threats instantly with AI-powered analysis.</li>
                    <li> ✔ Enable teams to investigate incidents efficiently and respond in real-time.</li>
                    <li>✔  Gain valuable insights with minimal manual effort.</li>
                </ul>
                <a href="/login"><button className="explore-button"><b>Register</b></button></a>
            </div>

        </div>
    );
};

export default services1;
