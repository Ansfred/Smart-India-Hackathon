import React, { useState, useEffect, useContext } from "react";
import "./Search.css";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import AuthContext from "../../context/AuthProvider";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useContext(AuthContext);
  const axios = useAxiosPrivate();

  const [searchQuery, setSearchQuery] = useState("");
  const [completeData, setCompleteData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [initalRender, setInitialRender] = useState(true);

  const returnResponseCards = (data) => {
    if (data) {
      return data.map((dataObj) => {
        return (
          <div className="response-card" key={dataObj.id}>
            <p className="hospital-name">{`Hospital Name: ${dataObj.hospital_name}`}</p>
            <p>{`Problem Diagnosed: ${dataObj.problem_dignosed}`}</p>
            {dataObj.surgery_name !== "" && (
              <p>{`Surgery Name: ${dataObj.surgery_name}`}</p>
            )}
            <p>{`Cost Incurred: ₹${dataObj.cost}`}</p>
          </div>
        );
      });
    }
    return [];
  };

  let responseElements = initalRender
    ? returnResponseCards(completeData)
    : returnResponseCards(filteredData);

  useEffect(() => {
    if (auth === undefined || auth === null) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      const config = {
        method: "get",
        url: "http://127.0.0.1:8000/patient/api/patient-data/",
        headers: {
          Authorization: "Bearer " + auth.accessToken,
          // Format of Authorization value is 'Bearer <ACCESS_TOKEN>"
        },
      };

      axios(config)
        .then(function (response) {
          setCompleteData(response.data);
        })
        .catch(function (error) {
          navigate("/login", { state: { from: location }, replace: true });
        });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    setFilteredData(
      completeData.filter((dataObj) => {
        const hospital = dataObj.hospital_name.toLowerCase();
        const problem = dataObj.problem_dignosed.toLowerCase();
        const surgery = dataObj.surgery_name.toLowerCase();
        const query = searchQuery.toLowerCase();
        return (
          hospital.includes(query) ||
          problem.includes(query) ||
          surgery.includes(query)
        );
      })
    );
    setInitialRender(false);
  };

  return (
    <div className="search-container">
      <h2>Get Information</h2>
      <div className="search-query-container">
        <input
          name="search-query"
          id="search-query"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Enter hospital name or operation name"
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>
      <h2 id="responses-title">Responses</h2>
      <div className="responses-container">{responseElements}</div>
    </div>
  );
};

export default Search;
