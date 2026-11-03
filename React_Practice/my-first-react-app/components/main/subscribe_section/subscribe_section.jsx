import React from "react";
import "./subscribe_section.css";

function Subscribe_section() {
    return (
        <div className="suscribe_main">
            <h2 className="subscribe">subscribe to get information, latest news and other interesting offers about jadoo</h2>
            <div className="sub_inp_but_main">
                <input type="text" placeholder="Enter your Email" className="inputtext" autoComplete="off" />
                    <button className="subbutn">subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe_section;