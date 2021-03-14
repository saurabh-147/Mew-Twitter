import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneno: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const resetdetails = () => {
    setDetails({
      name: "",
      email: "",
      subject: "",
      message: "",
      phoneno: "",
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch("/contactus", {
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
      <h1 className="contactHead">Contact us</h1>
      <form>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} value={details.name} />
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} value={details.email} />
        <label>Subject</label>
        <input type="text" name="subject" onChange={handleChange} value={details.subject} />
        <label>Enter a no.</label>
        <input type="text" name="phoneno" onChange={handleChange} value={details.phoneno} />
        <label>Message</label>
        <textarea name="message" onChange={handleChange} value={details.message} />

        <button type="submit" onClick={onSubmit}>
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

  .contactHead {
    font-size: 30px;
    font-weight: 500;
    color: #6e7c7c;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
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
  button {
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
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export default Contact;
