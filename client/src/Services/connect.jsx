import React from "react";
import Navbar from "../frontpage/Navbar";
import Footer from "../frontpage/Footer";
import Midlediv from "./services";  // Ensure this file is named correctly as "services.js"
import Content1 from "./service2";  // Ensure "service2.js" contains a valid React component
import "./services.css";
import "../frontpage/page.css";

const Connect = () => {
    return (
        <div>
            <Navbar />
            <Midlediv /> 
            <Content1 />  
            <Footer />
        </div>
    );
};

export default Connect;

