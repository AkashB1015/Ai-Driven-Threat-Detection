import React from "react";
import "./contact.css";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
    return (
        <div className="contact-container">
            {/* Left Section */}
            <div className="contact-left1">
                <h4 className="contact-title">CONTACT US</h4>
                <h2 className="contact-heading">Let’s talk about your problem.</h2>
            </div>

            {/* Right Section - Contact Form */}
            <div className="contact-form-container">
                <h3 className="contact-form-title">Contact Us</h3>
                <form className="contact-form">
                    <div className="input-group">
                        <label className="contact-label">Full Name*</label>
                        <input type="text" className="contact-input" placeholder="John Doe" />
                    </div>
                    <div className="input-group">
                        <label className="contact-label">Email*</label>
                        <input type="email" className="contact-input" placeholder="example@yourmail.com" />
                    </div>
                    <div className="input-group">
                        <label className="contact-label">Phone*</label>
                        <input type="tel" className="contact-input" placeholder="+91...." />
                    </div>
                    <div className="input-group">
                        <label className="contact-label">Message*</label>
                        <textarea className="contact-textarea" placeholder="Type your message here"></textarea>
                    </div>
                    <button className="contact-button">Sumbit</button>
                </form>
            </div>
        </div>
    );
};
export default ContactPage;


