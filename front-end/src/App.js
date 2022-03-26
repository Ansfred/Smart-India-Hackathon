import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./Pages/LandingPage/LandingPage";
import PatientForm from "./Pages/PatientForm/PatientForm";
import NavBar from "./Pages/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import SetNewPassword from "./Pages/ForgotPassword/SetNewPassword";
import Search from "./Pages/Search/Search";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <Router>
      <div className="App">
        {!loginStatus ? (
          <Routes>
            {/* <Route path="/" element={<LandingPage />}></Route> */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route
              path="/setnewpassword"
              element={<SetNewPassword></SetNewPassword>}
            ></Route>
            <Route path="/add" element={<PatientForm />}></Route>
            <Route path="/viewrecords" element={<Search />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        ) : (
          <>
            <NavBar />
            <Routes></Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
