import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import PatientForm from "./Pages/PatientForm/PatientForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>

          {/* Temporary - comment line 11 and uncomment line 14 to see the form*/}
          {/* <Route path="/" element={<PatientForm />}></Route> */}

          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
