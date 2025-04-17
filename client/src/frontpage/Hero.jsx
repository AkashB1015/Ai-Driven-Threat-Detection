import React from "react";
import "./page.css";

const Hero = () => {
    return (
        <div className="wave11">
            <div className="hero">
                <div className="hero-content">
                    <h1>Protect Your Device with <h2>Syscure</h2></h1>
                    {/* <p> <b> Advanced security for your device.</b> Stay safe from viruses, malware, and online threats.</p>
                    <br /> */}
                     <a href="/login" ><button className="Register1 ">Register </button></a>
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
