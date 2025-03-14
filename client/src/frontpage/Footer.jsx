import React from "react";
import "./page.css";

const Footer = () => {
    return (
        <footer id="contact">
            <div className="container_footer">
                <div className="footer-section">
                    <h4>SOFTWARE</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Leadership Team</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Syscure Foundation</a></li>
                        <li><a href="#">Syscure Blogs</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>PRODUCTS</h4>
                    <ul>
                        <li><a href="#">Windows - Browser</a></li>
                        <li><a href="#">Mac - Browser</a></li>
                        <li><a href="#">Total Security</a></li>
                        <li><a href="#">Network Security</a></li>
                        <li><a href="#">Multi - Device</a></li>
                    </ul>
                </div>

                
        <div class="footer-section">
          <h4>SUPPORT</h4>
          <ul>
            <li><a href="#">Report an Issue</a></li>
            <li><a href="#">How to use Videos</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Report a security vulnerability</a></li>
            <li><a href="#">Submit Your Idea</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>SOFTWARE LINKS</h4>
          <ul>
            <li><a href="#">Renew Now</a></li>
            <li><a href="#">Upgrade to latest version</a></li>
            <li><a href="#">Free Tools</a></li>
            <li><a href="#">Free Trials</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Syscure Tech Limited. <a href="#">Privacy Policy</a> | <a href="#">Legal Notices</a> | <a href="#">Terms Of Use</a> | <a href="#">EULA</a></p>
            </div>
        </footer>
    );
};

export default Footer;
