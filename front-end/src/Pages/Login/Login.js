import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-card">
        <h1>Login</h1>
        <form>
          <div className="login-email">
            <input type="email" placeholder="Enter Email" required></input>
          </div>
          <div className="login-password">
            <input type="password" placeholder="Enter Password" required />
          </div>

          {/* <Link to="/">Forgot Password</Link> */}
          <button>Login</button>
        </form>
        <div className="links">
          <p>
            <Link className="forgotPassword" to="/">
              Forgot Password ?
            </Link>
          </p>
          <p>
            <Link className="signUp" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
