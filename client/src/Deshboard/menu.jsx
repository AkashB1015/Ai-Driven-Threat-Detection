import React from "react";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

import "./deshboard.css";


const menu = () => {
    return (
        <div>
            <TopBar />
            <Sidebar />
        </div>
    );
};

export default menu;