import React from "react";
import "./login.css";
import EmailLogin from "../../components/emailLogin/EmailLogin";
import GoogleLogin from "../../components/googleLogin/GoogleLogin";

function Login() {
  return (
    <div className="landing-container">
      <h1 className="header">Welcome to Cloud Storage</h1>
      <EmailLogin />
      <GoogleLogin />
    </div>
  );
}

export default Login;
