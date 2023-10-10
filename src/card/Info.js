import React from "react";
import Image from './img/esther_new.jpg'
import Image1 from './img/bello_new.jpg'

const Info = () => {
    return (
        <div className="info-session">
            <div className="info">
                <img className="info-pics" src={Image} alt="Esther" />
                <p className="info-name">Esther Igwagu</p>
                <p className="info-job">Frontend Developer</p>
                <a className="info-site" href="https://mrbhi.github.io/My-Portfolio/">website</a>
                <div className="info-button">
                    <button className="info-email">Email</button>
                    <button className="info-linkedin">Linkedin</button>
                </div>
            </div>
            <div className="info">
                <img className="info-pics" src={Image1} alt="Bello" />
                <p className="info-name">Taofeeq Bello</p>
                <p className="info-job">Backend Developer</p>
                <a className="info-site" href="https://mrbhi.github.io/My-Portfolio/">website</a>
                <div className="info-button">
                    <button className="info-email">Email</button>
                    <button className="info-linkedin">Linkedin</button>
                </div>
            </div>
        </div>
        
        
    )
}

export default Info