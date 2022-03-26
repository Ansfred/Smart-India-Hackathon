import React, { useEffect } from "react";
import Aboutus from "../Howitworks/Howitworks";
import LandingPage from "../HomeNavbar/HomeNavbar";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="homepage">
      <div className="home">
        <div className="homepage-nav">
          <LandingPage></LandingPage>
        </div>
        <div data-aos="fade-up" className="home-ouraim">
          We clearly aims at finding the injustice and letting the user know it,
          but not on further official actions yet.
        </div>
      </div>
      <div className="home-howitworks">
        <Aboutus></Aboutus>
      </div>
    </div>
  );
}

export default Home;
