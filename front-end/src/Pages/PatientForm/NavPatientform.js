import { Link } from "react-router-dom";
import { useEffect } from "react";
// import "./LandingPage.css";
import Aos from "aos";
import "aos/dist/aos.css";
function NavPatientform() {
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
    <nav
      style={{ backgroundColor: "#02576d" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container-fluid">
        <Link
          style={{ fontSize: "large", color: "yellow" }}
          className="navbar-brand"
          to="/"
        >
          Ctrl+Alt+Elite
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
          <ul
            style={{ fontSize: "large" }}
            className="navbar-nav ms-auto mb-2 mb-lg-0"
          >
            <li className="nav-item">
              <Link
                data-aos="fade-left"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to="/"
                className="nav-link active mx-2"
                aria-current="page"
              >
                Home
              </Link>
            </li>

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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavPatientform;
