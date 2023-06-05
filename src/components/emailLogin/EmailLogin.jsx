import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./emailLogin.css";

function EmailLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try againl");
    }
  };

  return (
    <>
      <form action="POST">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button className="login-button" onClick={handlePasswordSignIn}>
        Login
      </button>
    </>
  );
}

export default EmailLogin;
