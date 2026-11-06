import { useState } from "react";
import "./signupMainPage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import SignIn from "../logginPage/signin/signin";
import Signup from "../logginPage/signup/signup";

function SignupMainPage({
  onClose,
  setUserIconChange,
  isLoggedIn,
  setIsLoggedIn
}) {

  const [signinOpen, setSigninOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("LoggedInUser")
    setIsLoggedIn(false);
    setUserIconChange("");
    onClose();
  };

  return (
    <>
      {!signinOpen && !signupOpen && (
        <div className="signpage_main">

          <div
            className="closing"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>

          <h1>Welcome</h1>

          {!isLoggedIn ? (

            <div className="signpage_butn">

              <button
                onClick={() => setSigninOpen(true)}
                className="sign_in"
              >
                Sign in
              </button>

              <button
                onClick={() => setSignupOpen(true)}
                className="sign_out"
              >
                Sign up
              </button>

            </div>

          ) : (

            <div>

              <button
                className="signOut"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}

      {signinOpen && (
        <SignIn
          onClose={() => {
            setSigninOpen(false);
            onClose();
          }}
          setUserIconChange={setUserIconChange}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      {signupOpen && (

        <Signup
          onClose={() => setSignupOpen(false)}
        />

      )}

    </>
  );
}

export default SignupMainPage;