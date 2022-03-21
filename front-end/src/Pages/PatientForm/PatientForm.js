import React, { useState } from "react";
import "./PatientForm.css";

const PatientForm = () => {
  const [hadOperation, setHadOperation] = useState(true);

  const handleSelectChange = () => {
    setHadOperation((prevValue) => !prevValue);
  };

  return (
    <div className="patient-outer-container">
      <div className="patient-form-container">
        <h1>Patient Details Form</h1>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Hospital Name"
            name="hospitalName"
            id="hospitalName"
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
              required
            />
            <label htmlFor="operationName" className="form__label">
              Operation Name
            </label>
          </div>
        )}

        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Cost Incurred"
            name="costIncurred"
            id="costIncurred"
            required
          />
          <label htmlFor="costIncurred" className="form__label">
            Cost Incurred
          </label>
        </div>

        <div className="form__group field upload-receipt">
          <label htmlFor="uploadReceipt">Upload Receipt</label>
          <input type="file" name="uploadReceipt" id="uploadReceipt"></input>
        </div>
        <p id="blur-msg">
          Note: Please blur your personal details in the receipt
        </p>
      </div>
    </div>
  );
};

export default PatientForm;
