import React from "react";
import logo from "../logo.png"

const New = () => {
    return (
        <nav className="nav-bar">
            <img className="nav-icon" alt="nav icon" src={logo} />
            <h3 className="nav-logo-text">MY PROFILE</h3>
            <h4 className="nav-title">LEFT HAND BAR</h4>
        </nav>
    )
}

export default New