import React from "react";
import "./login.css";
import EmailLogin from "../../components/emailLogin/EmailLogin";
import GoogleLogin from "../../components/googleLogin/GoogleLogin";
import { Link } from "react-router-dom";
import { auth } from "../../config";

function Login() {
  return (
    <div className="landing-container">
      <h1 className="header">Welcome to Cloud Storage</h1>
      <EmailLogin />
      <GoogleLogin />
      <p>Don't have an account? Click <Link to='/signup'>here</Link></p>
    </div>
  );
}

export default Login;
