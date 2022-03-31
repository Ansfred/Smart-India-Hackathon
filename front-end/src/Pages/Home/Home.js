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
          Users can either enter their data to help other patients by clicking
          on add records or see the data already entered by clicking on view
          records. We clearly aim at finding the injustice and letting the user
          know about it, but not on further official actions yet. <br></br>
          Additionally we will implement functionality for the user to submit a
          complaint if they feel that they have been overcharged and/or
          exploited. These complaints will be visible to the government who can
          take action accordingly.
        </div>
      </div>
      <div className="home-howitworks">
        <Aboutus></Aboutus>
      </div>
    </div>
  );
}

export default Home;
