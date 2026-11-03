import React from "react";
import "./footer-left-section.css";
import footerlogo from "../../../assets/images/footerLogo.png";


function Footer_left_section(){
    return(
        <div className="footer-left-main">
            <img src={footerlogo} className="footerLogo"/>
        </div>
    )

}

export default Footer_left_section;