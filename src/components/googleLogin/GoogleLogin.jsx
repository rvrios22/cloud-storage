import React from "react";
import "./googleLogin.css";
import { auth } from "../../config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function GoogleLogin() {
  const provider = new GoogleAuthProvider();
  return <div>GoogleLogin</div>;
}

export default GoogleLogin;
