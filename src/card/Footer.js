import React from "react";
import Twitter from "./img/Twitter Icon.png"
import Facebook from "./img/Facebook Icon.png"
import Instagram from "./img/Instagram Icon.png"
import Github from "./img/GitHub Icon.png"

const Footer = () => {
    return(
        <div className="info-footer-session">
            <footer className="info-footer">
                <img src={Twitter} alt="Twitter" />
                <img src={Facebook} alt="Facebook" />
                <img src={Instagram} alt="Instagram" />
                <img src={Github} alt="Github" />
            </footer>
            <footer className="info-footer">
                <img src={Twitter} alt="Twitter" />
                <img src={Facebook} alt="Facebook" />
                <img src={Instagram} alt="Instagram" />
                <img src={Github} alt="Github" />
            </footer>
        </div>
    )
}

export default Footer