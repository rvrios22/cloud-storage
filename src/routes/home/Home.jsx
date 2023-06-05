import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config";
import { signOut } from "firebase/auth";

function Home() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div>
      <nav>
        <button onClick={handleSignOut}>Logout</button>
      </nav>
    </div>
  );
}

export default Home;
