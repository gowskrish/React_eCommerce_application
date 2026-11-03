import { useEffect } from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";

function Header ({sentDataToParent}) {
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        return response.json();
    })
    .then(sentDataToParent)
    .catch((error) => {
        console.error("Error fetching user:", error);
    });
   }, [sentDataToParent]);

    
    const navMenu = [
        { name: "destination", link: "#" },
        { name: "hotels", link: "#" },
        { name: "flights", link: "#" },
        { name: "bookings", link: "#" },
        { name: "login", link: "#"}
    ];


    return (
        <div className="header">
           <div className="header_left">
            <img src={logo} className="logoimg"/>
           </div>
            <div className="header_right">
                <ul className="header_list">
                    {navMenu.map((item, index) => (
                        <li key={index} className="header_list_item">
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
            </ul>
           </div> 
             
            <button className="signup-butn">Sign up</button>
        </div>
    )
}

export default Header;