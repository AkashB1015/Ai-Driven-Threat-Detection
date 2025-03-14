import React from "react";
import Navbar from "../frontpage/Navbar";
import Footer from "../frontpage/Footer";
import ContactPage from "./connect";
import "./contact.css";
import "../frontpage/page.css";

const add = () => {
    return (
        <div>
            <Navbar />
            <ContactPage/>
            <Footer />
        </div>
    );
};

export default add;

