import React from 'react';
import "./searchmain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchmain() {
    return (
        <div className="searchmain_main">
            <div className="search-left-section">
                <a href="searchmain.jsx"><h3>MEN</h3></a>
                <a href="searchmain.jsx"><h3>WOMEN</h3></a>
                <a href="searchmain.jsx"><h3>KIDS</h3></a>

                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input
                        id="search-butn"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>
        </div>
    );
}

export default Searchmain;