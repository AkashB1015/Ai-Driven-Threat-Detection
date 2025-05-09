import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header>
            <div className="container_start">
                <nav>
                    <div className="logo">
                        <img src="/images/Syscure_logo.svg" className="logo-img1" alt="Syscure Logo" />
                        Syscure
                    </div>

                    <ul className="nav-links">
                        <li><a href="/Dashboard">Home</a></li>
                        {/* <li><a href="#">About</a></li> */}
                        <li><a href="/service">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/login" ><button className="cta-button ">Sign up</button></a></li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
