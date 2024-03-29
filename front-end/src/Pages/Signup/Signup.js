import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import NavSignup from "./NavSignup";

function Signup() {
  const [email, setemail] = useState();
  const [first_name, setfirst_name] = useState();
  const [last_name, setlast_name] = useState();
  const [password, setpassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, first_name, last_name, password);
    try {
      await axios.post(
        "http://127.0.0.1:8000/user/api/register/",
        JSON.stringify({ email, first_name, last_name, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setemail("");
      setfirst_name("");
      setlast_name("");
      setpassword("");
      document.querySelector("#confirm-pass-input").value = "";
      //   console.log(response.data);
      //   console.log(response.accessToken);
      //   console.log(JSON.stringify(response));
    } catch (err) {}
  };
  return (
    <>
      <NavSignup></NavSignup>
      <div className="signup">
        <div className="signup-card">
          <h1>Sign Up</h1>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-firstname">
              <input
                type="text"
                placeholder="Enter First Name"
                className="firstname-input"
                required
                value={first_name}
                onChange={(e) => setfirst_name(e.target.value)}
              ></input>
            </div>
            <div className="signup-lastname">
              <input
                type="text"
                placeholder="Enter Last Name"
                className="lastname-input"
                required
                value={last_name}
                onChange={(e) => setlast_name(e.target.value)}
              ></input>
            </div>
            <div className="signup-email">
              <input
                type="email"
                placeholder="Enter Email"
                className="signup-email-input"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </div>

            <div className="signup-password">
              <input
                type="password"
                placeholder="Enter Password"
                className="signup-password-input"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              ></input>
            </div>
            <div className="signup-confirm-password">
              <input
                type="password"
                placeholder="Confirm Password"
                className="signup-confirm-password-input"
                required
                id="confirm-pass-input"
              ></input>
            </div>

            {/* <Link to="/">Forgot Password</Link> */}
            <button className="signupbtn" type="submit">
              Sign Up
            </button>
          </form>
          <div className="links">
            <p>
              <Link className="signUp" to="/login">
                Already have an account-Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
