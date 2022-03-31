import React, { useEffect } from "react";
import "./Howitworks.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Aboutus() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="aboutus">
      <div data-aos="flip-left" className="aboutus-card">
        <h1 className="heading">How It Works</h1>
        <ul>
          <li>
            Patients can add their hospital records for helping others to not
            get exploited.
          </li>
          <li>
            People will be able to filter costs by hospital or surgery and
            report/take action in case of discrepancy.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aboutus;
