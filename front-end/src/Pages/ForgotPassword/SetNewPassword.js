import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import AuthContext from "../../context/AuthProvider";
import "./SetNewPassword.css";
// import { useParams } from "react-router-dom";

function SetNewPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  // const { auth } = useContext(AuthContext);
  const axios = useAxiosPrivate();
  // console.log("winloc:", window.location);
  const mykeyvalues = window.location.search;
  const urlParams = new URLSearchParams(mykeyvalues);
  const uidb64 = urlParams.get("?uidb64");
  const token = urlParams.get("?token");
  //   console.log("uidb64===", param1);
  //   console.log("token===", param2);
  const [newpassword, setnewpassword] = useState();
  //   const loct = window.location;
  //   const { uidb64 } = useParams();
  const handlesubmit = async (e) => {
    e.preventDefault();
    // store the states in the form data
    try {
      // make axios post request
      const response = await axios({
        method: "patch",
        url: "http://127.0.0.1:8000/user/api/password-reset-confirm/", // https://httpbin.org/post <- For Testing
        data: { password: newpassword, uidb64, token },
        // headers: {
        //   Authorization: "Bearer " + auth.accessToken,
        // },
      });
      //   setauth(undefined);
      navigate("/login");
    } catch (error) {
      navigate("/login", { state: { from: location }, replace: true });
    }
  };
  return (
    <>
      <form className="setnewpasswordform" onSubmit={handlesubmit}>
        <div className="setpassword-container">
          <div className="setpasswordcard-container">
            <div className="setnewpassword">
              <h3> Set New Password</h3>

              <label htmlFor="newpassword">Enter new password:</label>
              <input
                type="text"
                name="newpassword"
                placeholder="new password"
                onChange={(e) => setnewpassword(e.target.value)}
              ></input>
              <button className="setnewpasswordbtn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SetNewPassword;
