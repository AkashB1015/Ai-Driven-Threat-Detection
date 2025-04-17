import React from "react";
import "./page.css"
import "./Pricing"
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // X (formerly Twitter)

const Footer = () => {
    return (
        <footer className="footer">
            {/* Navigation Links */}
            <div className="footer-links">
                <a href="/">About</a>
                <a href="/service">Service</a>
                <a href="/Contact">Contact</a>
                <a href="FAQ">FAQ's</a>
                <a href="/login">Free Trials</a>
                <a href="#">Subscribe</a>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons">
                {/* <FaFacebook />
                <FaInstagram />
                <RxCross2 />
                <FaGithub />
                <FaYoutube /> */}
                
                <a href="https://www.instagram.com/"><FaInstagram /></a>
                <a href="https://github.com/"><FaGithub /></a>
                <a href="https://www.facebook.com/"><FaFacebook /></a>
                <a href="https://youtube.com/"><FaYoutube /></a>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Syscure  <a href="">Privacy Policy</a> |  <a href="#">Terms Of Use</a></p>
            </div>
        </footer>
    );
};

export default Footer;
