import React from "react";
import "./page.css";

const Hero = () => {
    return (
        <div>

            <div className="hero">
                <div className="hero-content">
                    <h1>Protect Your Device with Syscure</h1>
                    <p> <b>Advanced security for your device.</b>  <br />Stay safe from viruses, malware, and online threats.</p>
                    <br />
                    
                </div>
                <img src="/images/2.svg" className="protect_img" alt="Protection" />

            </div>

            <div className="block2">
            <img src="/images/1.svg" className="protect_img" alt="Protection" />
            
                <div className="block2-content">
                    <h1>Manage Your Password  with Syscure</h1>
                    <p><b>Secure Your Passwords, Protect Your Digital Life. </b><br />
                    Keep your credentials encrypted, safe, and always within reach.</p>
                </div>
              <br />


            </div>
        </div>
    );
};

export default Hero;
