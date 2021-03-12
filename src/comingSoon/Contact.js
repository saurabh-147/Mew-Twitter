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
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={details.name} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={details.email} />
        <input type="text" name="subject" placeholder="Subject" onChange={handleChange} value={details.subject} />
        <input type="text" name="phoneno" placeholder="Enter your no" onChange={handleChange} value={details.phoneno} />
        <textarea name="message" placeholder="Message" onChange={handleChange} value={details.message} />

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
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;

    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: red;
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
