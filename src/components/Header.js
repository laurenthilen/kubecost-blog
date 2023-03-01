import React from "react";

import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" height="80px" />
            <h1>Kubecost Cloud Blog</h1>
        </div>
    );
};

export default Header;