import React from "react";
import { Link } from "react-router-dom";
import "./emailLogin.css";

function EmailLogin() {
  return (
    <>
      <form action="POST">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="email" id="email" name="email" />
      </form>
      <button className="login-route">Proceed to login</button>
      <p className="general-text">
        Don't have an account? Click <Link to="/signup">here</Link>
      </p>
    </>
  );
}

export default EmailLogin;
