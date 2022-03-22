import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function NavBar() {
    const handleLogout = () => {
        // TODO clear cookies
        <Navigate to="/" />
    }

    return (
        <div className="sidenav ">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse d-flex  justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link to="/home" className="nav-item nav-link active" > Home</Link>
                        <Link to="/add" className="nav-item nav-link active" > Verify</Link>
                    </div>
                    <button className = "btn " onClick = {handleLogout} > LogOut</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;