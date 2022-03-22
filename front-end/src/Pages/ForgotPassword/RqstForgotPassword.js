import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RqstForgotPaswrd.css";

function RqstForgotPassword(props) {
  const navigate = useNavigate();
  const sendVeriLinkForgotPassword = async (e) => {
    e.preventDefault();
    // store the states in the form data
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/user/api/request-reset-password/", // https://httpbin.org/post <- For Testing
        data: {
          email,
          redirect_url: "http://localhost:3000/setnewpassword",
        },
        // headers: {
        //   Authorization: "Bearer " + auth.accessToken,
        // },
      });
      // setauth(undefined);
      props.setTrigger(false);
    } catch (error) {
      navigate("/login");
    }
  };
  const [email, setemail] = useState();
  return props.trigger ? (
    <div className="RqstForgotPassword">
      <div className="popup-inner">
        <button
          id="closebtn"
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
            setemail(null);
          }}
        >
          close
        </button>
        <h4 className="rqstforgotpassword-heading">
          Enter Email to Reset Password
        </h4>
        <form>
          <div className="input_email container ">
            <input
              type="email"
              placeholder="Enter Email"
              className="rqstforgotpasswordemail"
              required
              onChange={(e) => setemail(e.target.value)}
            ></input>
          </div>
          <div className="email-submit">
            <button
              className="rqstpasswordbtn"
              type="submit"
              onClick={sendVeriLinkForgotPassword}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}

export default RqstForgotPassword;
