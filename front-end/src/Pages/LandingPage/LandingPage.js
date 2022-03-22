import { Link } from "react-router-dom";

function LandingPage() {
    console.log("TODO");

    return(
        <div className="sidenav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/login" className="nav-item nav-link active" > Login</Link>
                        <Link to="/signup" className="nav-item nav-link active" > Signup</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default LandingPage