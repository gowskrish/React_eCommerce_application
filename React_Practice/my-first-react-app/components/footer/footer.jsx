import React from "react";
import "./footer.css";
import Footer_left_section from "./footer-left-section/footer-left-section";
import Footer_right_section from "./footer-right-section/footer-right-section";


function Footer(){

    return(
        <div className="footer_main">
        <Footer_left_section />
        <Footer_right_section />


        </div>
    )
}

export default Footer;