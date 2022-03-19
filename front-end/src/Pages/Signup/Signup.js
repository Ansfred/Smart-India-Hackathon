import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <form className="signup-form">
          <div className="signup-firstname">
            <input type="text" placeholder="Enter First Name" required></input>
          </div>
          <div className="signup-lastname">
            <input type="text" placeholder="Enter Last Name" required></input>
          </div>
          <div className="signup-email">
            <input type="email" placeholder="Enter Email" required></input>
          </div>

          <div className="signup-password">
            <input
              type="password"
              placeholder="Enter Password"
              required
            ></input>
          </div>
          <div className="signup-confirm-password">
            <input
              type="password"
              placeholder="Confirm Password"
              required
            ></input>
          </div>

          {/* <Link to="/">Forgot Password</Link> */}
          <button>Sign Up</button>
        </form>
        <div className="links">
          <p>
            <Link className="signUp" to="/">
              Already have an account-Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
