import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="landing-container">
      <h1 className="header">Welcome to Cloud Storage</h1>
      <Link>
        <p className="login-route">Proceed to login</p>
      </Link>
      <p className="general-text">
        Don't have an account? Click <Link>here</Link>
      </p>
    </div>
  );
}

export default Home;
