import React from "react";
import "./footer-right-section.css";

function Footer_right_section(){
    return(
        <div className="footer-right-main">
            <ul className="foot_navlist">
                <li><a href="index.html">destination</a></li>
                <li><a href="index.html">hotels</a></li>
                <li><a href="index.html">flights</a></li>
                <li><a href="index.html">bookings</a></li>
                <li><a href="index.html">login</a></li>
            </ul>
            <button className="signup-butn">Sign out</button>
            
        </div>
    )

}

export default Footer_right_section;