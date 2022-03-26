import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useEffect } from "react";
// import "./LandingPage.css";
import AuthContext from "../../context/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";
function LandingPage() {
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const handleMouseEnter = (e) => {
    e.target.style.color = "yellow";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "#ffffff";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transperent">
      <div className="container-fluid">
        <Link style={{ fontSize: "large" }} className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {auth === undefined || auth === null ? (
            <ul
              style={{ fontSize: "large" }}
              className="navbar-nav ms-auto mb-2 mb-lg-0"
            >
              <li className="nav-item">
                <Link
                  data-aos="fade-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/viewrecords"
                  className="nav-link active mx-2"
                  aria-current="page"
                >
                  View Records
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-aos="fade-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/add"
                  className="nav-link active mx-2"
                  aria-current="page"
                >
                  Add Records
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  data-aos="fade-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/login"
                  className="nav-link active mx-2"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-aos="fade-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/signup"
                  className="nav-link active mx-2"
                  aria-current="page"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          ) : (
            <ul
              style={{ fontSize: "large" }}
              className="navbar-nav ms-auto mb-2 mb-lg-0"
            >
              <li className="nav-item">
                <Link
                  data-aos="fade-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/viewrecords"
                  className="nav-link active mx-2"
                  aria-current="page"
                >
                  View Records
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  data-aos="fade-left"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/add"
                  className="nav-link active mx-2"
                  aria-current="page"
                >
                  Add Records
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default LandingPage;
