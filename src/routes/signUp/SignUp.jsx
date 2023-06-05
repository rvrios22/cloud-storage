import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/')
    } catch(error) {
        alert("Something has gone wrong. Please try again");
        console.error(error)
    }
  };

  return (
    <div>
      <h1>Create An Account</h1>
      <form action="POST">
        <label htmlFor="create-email">Email:</label>
        <input
          type="email"
          id="create-email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="create-password">Password:</label>
        <input
          type="password"
          id="create-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleCreateAccount}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
