import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";

import {
  faBars,
  faHeart,
  faUser,
  faBagShopping
} from '@fortawesome/free-solid-svg-icons';

import './navbar.css';
import SignupMainPage from "../logginPage/signupMainPage";

export default function Navbar({  userIconChange, setUserIconChange}) {

  const [showSign, setShowSign] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Open profile popup
  const handleShowProfile = () => {
    setShowSign(true);
  };
  // HandleHome
  const navigate = useNavigate();
   const handleHome = () => {
    navigate("/")
   }

  return (
    <header className="navbar-shell">
      <div className="navbar-panel">

        <div className="nav-left">

          <button className="menu-button" onClick={handleHome}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <nav className="nav-links">
            <Link to="/" className="home_item">Home</Link>

            <Link to="/NewThisWeek" className="colec_item">
              Collection
            </Link>

            <Link to="/Ourapproach" className="new_item">
              New
            </Link>

            <Link to="/PLP" className="new_item">
              PLP
            </Link>
          </nav>
        </div>
        <div className="nav-logo">
          <div className="logo-left"></div>
          <div className="logo-right"></div>
        </div>

        <div className="nav-actions">

          <button className="round-button">
            <FontAwesomeIcon icon={faHeart} />
          </button>

          <button className="cart-button">
            <span>Cart</span>

            <span className="cart-icon-wrapper">
              <FontAwesomeIcon icon={faBagShopping} />
            </span>
          </button>

          <button
            className="round-button"
            aria-label="Profile"
            onClick={handleShowProfile}
          >
            {userIconChange || (
              <FontAwesomeIcon
                icon={faUser}
                className="usericon"
              />
            )}
          </button>

        </div>

      </div>

      {showSign && (
        <SignupMainPage
          onClose={() => setShowSign(false)}
          setUserIconChange={setUserIconChange}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

    </header>
  );
}