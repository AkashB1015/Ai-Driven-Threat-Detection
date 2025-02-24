import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "./Footer";
import "./page.css";

const frontpage1 = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Footer />
        </div>
    );
};

export default frontpage1;
