import React from "react";
import "./page.css";

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="/login" className="cta-button">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
