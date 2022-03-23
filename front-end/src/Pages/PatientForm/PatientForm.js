import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import AuthContext from "../../context/AuthProvider";

import "./PatientForm.css";

const PatientForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useContext(AuthContext);
  const axios = useAxiosPrivate();

  const [hadOperation, setHadOperation] = useState(true);
  const [patientFormData, setPatientFormData] = useState({
    hospitalName: "",
    problemDiagnosed: "",
    operationName: "",
    costIncurred: "",
    uploadedReceipt: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSelectChange = () => {
    setHadOperation((prevValue) => !prevValue);
  };

  const handleChange = (event) => {
    setPatientFormData((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]:
          event.target.type === "file"
            ? event.target.files[0]
            : event.target.value,
      };
    });
  };

  const clearForm = () => {
    setPatientFormData({
      hospitalName: "",
      problemDiagnosed: "",
      operationName: "",
      costIncurred: "",
      uploadedReceipt: "",
    });

    const fileInput = document.querySelector("input[type='file']");
    fileInput.value = null;
  };

  const handleFormSubmit = async () => {
    const patientFormDataObj = new FormData();
    patientFormDataObj.append("hospital_name", patientFormData.hospitalName);
    patientFormDataObj.append(
      "problem_dignosed",
      patientFormData.problemDiagnosed
    );
    patientFormDataObj.append("cost", patientFormData.costIncurred);
    patientFormDataObj.append("receipt_file", patientFormData.uploadedReceipt);
    patientFormDataObj.append("surgery_name", patientFormData.operationName);
    try {
      // make axios post request
      await axios({
        method: "post",
        url: "http://127.0.0.1:8000/patient/api/patient-data/", // https://httpbin.org/post <- For Testing
        data: patientFormDataObj,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + auth.accessToken,
        },
      });
      clearForm();
      window.scrollTo(0, 0);
      setIsFormSubmitted(true);
      setInterval(() => {
        setIsFormSubmitted(false);
      }, 1800);
    } catch (err) {
      console.log("Error Occurred!", err);
      navigate("/login", { state: { from: location }, replace: true });
    }
  };

  return (
    <div className="patient-outer-container">
      <div className="patient-form-container">
        <h1>Patient Details Form</h1>
        {isFormSubmitted && <h2>Form Submitted Successfully!</h2>}
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Hospital Name"
            name="hospitalName"
            id="hospitalName"
            value={patientFormData.hospitalName}
            onChange={handleChange}
            required
          />
          <label htmlFor="hospitalName" className="form__label">
            Hospital Name
          </label>
        </div>

        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Problem Diagnosed"
            name="problemDiagnosed"
            id="problemDiagnosed"
            value={patientFormData.problemDiagnosed}
            onChange={handleChange}
            required
          />
          <label htmlFor="problemDiagnosed" className="form__label">
            Problem Diagnosed
          </label>
        </div>

        <div className="form__group field had-operation-main">
          <label htmlFor="hadOperation">Did you undergo any operation?</label>
          <select
            name="hadOperation"
            id="hadOperation"
            value={hadOperation ? "yes" : "no"}
            onChange={handleSelectChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {hadOperation && (
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Operation Name"
              name="operationName"
              id="operationName"
              value={patientFormData.operationName}
              onChange={handleChange}
              required
            />
            <label htmlFor="operationName" className="form__label">
              Operation Name
            </label>
          </div>
        )}

        <div className="form__group field">
          <input
            type="number"
            min={0}
            step={100}
            className="form__field"
            placeholder="Cost Incurred"
            name="costIncurred"
            id="costIncurred"
            value={patientFormData.costIncurred}
            onChange={handleChange}
            required
          />
          <label htmlFor="costIncurred" className="form__label">
            Cost Incurred
          </label>
        </div>

        <div className="form__group field upload-receipt">
          <label htmlFor="uploadedReceipt">Upload Receipt</label>
          <input
            type="file"
            name="uploadedReceipt"
            id="uploadedReceipt"
            onChange={handleChange}
          ></input>
        </div>
        <p id="blur-msg">
          Note: Please blur your personal details in the receipt
        </p>

        <button id="submit-patient-form" onClick={handleFormSubmit}>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default PatientForm;
