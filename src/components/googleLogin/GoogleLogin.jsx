import React from "react";
import "./googleLogin.css";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function GoogleLogin() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
    </>
  );
}

export default GoogleLogin;
