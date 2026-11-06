import { useState } from "react";
import "./signin.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SignIn({
  onClose,
  setUserIconChange,
  setIsLoggedIn
}) {

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [editDatas, setEditDatas] = useState({
    mail: "",
    phone: ""
  });

  const [error, setError] = useState("");
  const [invalidMsg, setInvalidMsg] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [enableEditform, setEnableEditform] = useState(false);
  const [editButton, setEditButton] = useState(true);
  const [originalData, setOriginalData] = useState({
    mail: "",
    phone: ""
  });

  // Login input change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setInvalidMsg("");
    setError("");
  };

  // Edit input change
  const handleEditChange = (e) => {

    const { name, value } = e.target;

    setEditDatas((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  // Edit button
  const handleEditUserData = () => {
    setEnableEditform(true);
    setEditButton(false);
  };

  // Cancel edit
  const handleCancel = () => {

    setEditDatas(originalData);
    setEnableEditform(false);
    setEditButton(true);

  };

  // PATCH updated data
  const handleReSubmitDatas = async () => {

    try {

      const response = await fetch(
        `http://localhost:3001/UserDetails/${user.id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            mail: editDatas.mail,
            phone: editDatas.phone
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }

      setOriginalData({ ...editDatas });
      setEnableEditform(false);
      setEditButton(true);

    } catch (error) {

      console.log("Update error:", error);

    }

  };

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setInvalidMsg("");
    setUser(null);
    setLoading(true);

    try {

      const apiResponse = await fetch(
        "http://localhost:3001/UserDetails"
      );

      if (!apiResponse.ok) {
        throw new Error("Failed to fetch user data");
      }

      const users = await apiResponse.json();

      if (!Array.isArray(users)) {
        throw new Error("Invalid user data received");
      }

      // Find matching user
      const matchedUser = users.find((item) => {

        const apiName = String(item?.name ?? "")
          .trim()
          .toLowerCase();

        const enteredName = formData.name
          .trim()
          .toLowerCase();

        const apiPassword = String(item?.password ?? "");

        return (
          apiName === enteredName &&
          apiPassword === formData.password
        );

      });

      // Invalid login
      if (!matchedUser) {

        setInvalidMsg("Invalid name or password");
        return;
      }

      if(matchedUser){
        setIsLoggedIn(true)
        sessionStorage.setItem("LoggedInUser", JSON.stringify(matchedUser))

        setUserIconChange(matchedUser.name.charAt(0).toUpperCase());
        onClose();
      }

      // Successful login
      setUser({
        name: matchedUser.name,
        id: matchedUser.id,
      });

      // Update parent login status
      setIsLoggedIn(true);

      // Change profile icon
      const firstLetter = matchedUser.name ?.trim() ?.[0] ?.toUpperCase();

      setUserIconChange(firstLetter);

      // Clear form
      setFormData({
        name: "",
        password: "",
      });

      // Load edit data
      const userEditData = {
        mail: matchedUser.mail || "",
        phone: matchedUser.phone || ""
      };

      setEditDatas(userEditData);
      setOriginalData(userEditData);

    } catch (err) {

      setError(err.message || "Something went wrong");

    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="login_main">
      <button
        type="button"
        className="closing"
        onClick={onClose}
        aria-label="Close login"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      {!user && (
        <>
          <h1>Login</h1>

          <form
            className="login_form"
            onSubmit={handleLogin}
          >
            <label htmlFor="login-name">
              Your name
            </label>

            <input
              id="login-name"
              type="text"
              className="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="username"
              required
            />

            <label htmlFor="login-password">
              Password
            </label>

            <input
              id="login-password"
              type="password"
              className="name"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </>
      )}

      {user && (
        <div role="status">
          <p className="loginsuccess">
            Welcome {user.name}, your login was successful!
          </p>


          {!enableEditform && (
            <div className="user-details">
              {/* <p><strong>Name:</strong> {user.name}</p> */}
              {/* <p><strong>Email:</strong> {editDatas.mail || "Not provided"}</p> */}
              {/* <p><strong>Phone:</strong> {editDatas.phone || "Not provided"}</p> */}
            </div>
          )}

          {editButton && (

            <button
              type="button"
              onClick={handleEditUserData}
            >
              Edit
            </button>
          )}

          {enableEditform && (
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                value={editDatas.mail}
                onChange={handleEditChange}
                name="mail"
              />

              <input
                type="number"
                value={editDatas.phone}
                onChange={handleEditChange}
                name="phone"
              />

              <button
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleReSubmitDatas}
                disabled={
                  editDatas.mail === originalData.mail &&
                  editDatas.phone === originalData.phone
                }
              >
                Re Submit
              </button>
            </form>
          )}
        </div>

      )}

      {invalidMsg && (

        <div className="loginFail" role="alert">
          <p>{invalidMsg}</p>
        </div>
      )}
      {error && (
        <div className="loginFail" role="alert">
          <p>{error}</p>
        </div>

      )}

    </div>

  );
}

export default SignIn;