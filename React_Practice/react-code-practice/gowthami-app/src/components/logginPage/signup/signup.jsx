import React, { useState } from 'react';
import "./signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Signup({ onClose }) {
  const [values, setValues] = useState({
    id: "",
    name: "",
    mail: "",
    country: "",
    phone: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values, [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/UserDetails",

        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(values)
        }
      );
      if (!response.ok) {
        throw new Error("Signup Failed")
      }
      const newUser = await response.json();

      setMessage("Signup Sussessfully");
      console.log("New user:", newUser)

      setValues({
        id: "",
        name: " ",
        mail: "",
        Country: " ",
        phone: "",
        password: " "
      });
    }catch (error){
      setMessage(error.message)
    }
       };

  return (
    <div className="signup_main" data-component="Sign-up">
      <div className="signup_close" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </div>

      <h1>Registration Form</h1>

      <form onSubmit={handleSignup}>
        <label>Name</label>
        <input type="text"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
        />

        <label>E-mail address</label>
        <input type="email"
          name="mail"
          autoComplete="email"
          onChange={handleChange}
          value={values.mail}
          required
        />

        <label>Country</label>
        <input type="text"
          name="country"
          autoComplete="country-name"
          onChange={handleChange} 
          value={values.country}
          />

        <label>Phone</label>
        <input type="number"
          name="phone"
          autoComplete="number"
          onChange={handleChange}
         value={values.phone}
         required
        />

        <label>Password</label>
        <input type="password"
          name="password"
          // autoComplete="new-password"
          onChange={handleChange}
          value={values.password}
          required
        />

        <button type="submit">CREATE ACCOUNT</button>
        <p className="successmessage">{message}</p>
      </form>
    </div>
  );
}

export default Signup;
