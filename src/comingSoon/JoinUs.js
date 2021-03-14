import React, { useState } from "react";
import styled from "styled-components";

import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";

const JoinUs = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    position: "",
    domain: "",
    status: "",
    institute: "",
  });

  const handleSelect = (eventKey) => {
    console.log(eventKey);
    setDetails((prev) => {
      return {
        ...prev,
        domain: eventKey,
      };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(details);
  };

  const resetdetails = () => {
    setDetails({
      name: "",
      email: "",
      position: "",
      domain: "",
      status: "",
      institute: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/joinus", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
        }
      });

    resetdetails();
  };
  return (
    <Container>
      <h1 className="contactHead">JOIN US AT VIRTUERA</h1>
      <form>
        <label>Name</label>
        <input className="input1" type="text" name="name" onChange={handleChange} value={details.name} />
        <label>Email</label>
        <input className="input1" type="email" name="email" onChange={handleChange} value={details.email} />
        <label>Current Position</label>
        <RadioButton>
          <input className="input2" type="radio" name="position" value="student" onClick={handleChange} />
          <label>I'm Currently Studying</label>
        </RadioButton>
        <RadioButton>
          <input className="input2" type="radio" name="position" value="employee" onClick={handleChange} />
          <label>Employed</label>
        </RadioButton>
        {details.position !== "" ? (
          details.position === "student" ? (
            <Wrap>
              <label>Degree</label>
              <input className="input1" type="text" name="status" onChange={handleChange} value={details.status} />
              <label>University</label>
              <input className="input1" type="text" name="institute" onChange={handleChange} value={details.institute} />
            </Wrap>
          ) : (
            <Wrap>
              <label>Job Role</label>
              <input className="input1" type="text" name="status" onChange={handleChange} value={details.status} />
              <label>Organisation</label>
              <input className="input1" type="text" name="institute" onChange={handleChange} value={details.institute} />
            </Wrap>
          )
        ) : null}

        <label>Intrested Domain</label>
        <Select className="dropdownButton" name="domain" VALUE={details.domain} onChange={handleChange}>
          <MenuItem value="Machine Learning">Machine Learning</MenuItem>
          <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
          <MenuItem value="Front End Developer">Front End Developer</MenuItem>
        </Select>

        <button className="button1" type="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem;

  form {
    display: flex;
    flex-direction: column;
  }
  .input1 {
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: 2px;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
  textarea {
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 50px;
    border: 2px;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
  .button1 {
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 60px;
    border: none;

    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #ff7f50;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
  .dropdownButton {
    height: 3rem;
    margin: 1rem 0;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;

  .input2 {
    margin: 1rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default JoinUs;
