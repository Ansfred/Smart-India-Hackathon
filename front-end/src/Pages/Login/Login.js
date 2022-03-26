import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import "./Login.css";
import RqstForgotPassword from "../ForgotPassword/RqstForgotPassword";
import NavLogin from "./NavLogin";

// after login redirect to /home
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { setauth } = useContext(AuthContext);
  const { setrefreshToken } = useContext(AuthContext);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/api/login/",
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("response data=>", JSON.stringify(response?.data));
      const accessToken = response?.data?.tokens?.access;
      // console.log("accesstoken:=>", accessToken);
      setauth({ accessToken });
      setrefreshToken(response?.data?.tokens?.refresh);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  const [RqstFrgtPswrd, setRqstFrgtPswrd] = useState(false);
  return (
    <>
      <NavLogin></NavLogin>
      <div className="login">
        <div className="login-card">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="login-email">
              <input
                type="email"
                placeholder="Enter Email"
                required
                className="login-email-input"
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </div>
            <div className="login-password">
              <input
                type="password"
                placeholder="Enter Password"
                className="login-password-input"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            {/* <Link to="/">Forgot Password</Link> */}
            <button className="loginbtn" type="submit">
              Login
            </button>
          </form>
          <div className="links">
            <p>
              <Link
                className="forgotPassword"
                to="#"
                onClick={() => setRqstFrgtPswrd(true)}
              >
                Forgot Password ?
              </Link>
              {RqstFrgtPswrd ? (
                <RqstForgotPassword
                  trigger={RqstFrgtPswrd}
                  setTrigger={setRqstFrgtPswrd}
                ></RqstForgotPassword>
              ) : null}
            </p>
            <p>
              <Link className="signUp" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
