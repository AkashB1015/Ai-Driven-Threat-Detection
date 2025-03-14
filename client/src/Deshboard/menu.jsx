import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "./deshboard.css";


const menu = () => {
    return (
        <div>
            <TopBar />        
           <div className="main-container">
                <Sidebar />
                <MainContent />
                
            </div>
        </div>
    );
};

export default menu;