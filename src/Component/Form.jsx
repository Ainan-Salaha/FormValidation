import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    age: "",
    mobile_number: "",
    salary: "",
    gender: "",
    address: "",
    upload: "",
    country: "",
  });

  const [error, setError] = useState("");
  const [getAge, setGetAge] = useState();
  const [salary, setSalary] = useState();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formData.birthday) {
      let year = formData.birthday.split("-")[0];
      if (new Date().getFullYear() - year < 18) {
        alert("Age is less than 18");
      } else {
        setGetAge(new Date().getFullYear() - year);
      }
    }
    if (formData.salary) {
      setSalary(formData.salary);
    }
  };

  let submitHandler = () => {
    let errorObj = {};
    if (!formData.name) {
      errorObj.name = "Name is required";
    }
    if (formData.name && formData.name.match("^[a-zA-Z ]*$") === null) {
      errorObj.name = "Name is not valid";
    }

    if (!formData.birthday) {
      errorObj.birthday = "Birthday is required";
    }
    if (!formData.mobile_number) {
      errorObj.mobile_number = "Mobile Number is required";
    }
    if (
      formData.mobile_number &&
      (formData.mobile_number.length <= 10 ||
        formData.mobile_number.length >= 15)
    ) {
      errorObj.mobile_number = "Mobile Number is invalid";
    }
    if (!formData.salary) {
      errorObj.salary = "Salary is required";
    }
    if (!formData.address) {
      errorObj.address = "Address is required";
    }
    if (!formData.gender) {
      errorObj.gender = "Select gender";
    }
    if (!formData.upload) {
      errorObj.upload = "Please Upload file";
    }

    if (!formData.country) {
      errorObj.country = "Select the country";
    }
    if (Object.keys(errorObj).length > 0) {
      setError(errorObj);
      return;
    }
    setFormData({
      name: "",
      birthday: "",
      age: "",
      mobile_number: "",
      salary: "",
      address: "",
      upload: "",
      gender: "",
      country: "",
    });
    alert("Form submitted successfully!");
  };

  let resetHandler = (e) => {
    setFormData({
      name: "",
      birthday: "",
      age: "",
      mobile_number: "",
      salary: "",
      address: "",
      upload: "",
      gender: "",
      country: "",
    });
    setGetAge("");
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Register Form</h1>
      <div  className="formContainer">
        <div className="form">
          <label htmlFor="name" className="inputLabels">
            <span style={{ color: "tomato", fontSize: "1.1rem" }}>* </span>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            id="name"
            onChange={changeHandler}
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>

        <div className="form">
          <label htmlFor="birthday" className="inputLabels">
            <span style={{ color: "tomato", fontSize: "1.1rem" }}>* </span>
            Birthday
          </label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            value={formData.birthday}
            onChange={changeHandler}
          />
          {error.birthday && <p style={{ color: "red" }}>{error.birthday}</p>}
        </div>

        <div className="form">
          <label htmlFor="" className="inputLabels">
            <span style={{ color: "tomato", fontSize: "1.1rem" }}>* </span>Age
          </label>
          <input
            type=""
            name="age"
            id="age"
            disabled
            value={getAge && getAge}
          />
        </div>

        <div className="form">
          <label htmlFor="mobile" className="inputLabels">
            <span style={{ color: "tomato", fontSize: "1.1rem" }}>* </span>
            Mobile no.
          </label>
          <input
            type="tel"
            name="mobile_number"
            id="no"
            value={formData.mobile_number}
            onChange={changeHandler}
          />
          {error.mobile_number && (
            <p style={{ color: "red" }}>{error.mobile_number}</p>
          )}
        </div>

        <div className="form">
          <label htmlFor="salary" className="inputLabels">
            <span style={{ color: "tomato", fontSize: "1.1rem" }}>* </span>
            Salary
          </label>
          <div className="form1">
            <input type="" disabled value={salary && salary} />
            2000
            <input
              type="range"
              name="salary"
              id="salary"
              min="2000"
              max="10000"
              value={formData.salary}
              onChange={changeHandler}
            />
            10000
          </div>
        </div>

        <div className="form">
          <label htmlFor="address" className="inputLabels">
            <span style={{ color: "tomato", fontSize: "1.1rem" }}>* </span>
            Address
          </label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="3"
            onChange={changeHandler}
            value={formData.address}
          ></textarea>
          {error.address && <p style={{ color: "red" }}>{error.address}</p>}
        </div>

        <div className="form">
          <label htmlFor="gender" className="inputLabels">
            <span style={{ color: "tomato", fontSize: "1.1rem" }}>* </span>
            Gender
          </label>
          <div className="form1">
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={changeHandler}
            />
            <label htmlFor="male" className="inputLabels">
              Male
            </label>
            <br />
            <input
              type="radio"
              name="gender"
              id="female"
              // onChange={changeHandler}
              value={formData.gender}
            />
            <label
              htmlFor="female"
              className="inputLabels"
              // onChange={changeHandler}
              value={formData.gender}
            >
              Female
            </label>
            {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}
          </div>
        </div>

        <div className="form">
          <label htmlFor="upload" className="inputLabels">
            <span style={{ color: "tomato", fontSize: "1.1rem" }}>* </span>
            Upload
          </label>
          <input
            type="file"
            id="upload"
            name="upload"
            accept=".doc,.docx"
            value={formData.upload}
            onChange={changeHandler}
          />
          {error.upload && <p style={{ color: "red" }}>{error.upload}</p>}
        </div>

        <div className="form">
          <label htmlFor="country" className="inputLabels">
            <span style={{ color: "tomato", fontSize: "1.1rem" }}>* </span>
            Country
          </label>
          <select
            name="country"
            id="country"
            className="option"
            onChange={changeHandler}
            value={formData.country}
          >
            <option>Select</option>
            <option value="India">India</option>
            <option value="Sri Lank">Sri Lanka</option>
            <option value="Russia">Russia</option>
            <option value="Afganistan">Afganistan</option>
            <option value="Australia">Australia</option>
          </select>
          {error.country && <p style={{ color: "red" }}>{error.country}</p>}
        </div>

        <div className="form btn">
          <button
            type="submit"
            onClick={submitHandler}
            style={{ backgroundColor: " green" }}
          >
            Save
          </button>

          <button onClick={resetHandler} style={{ backgroundColor: "red" }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
