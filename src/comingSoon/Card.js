import React from "react";
import styled from "styled-components";
import cardImg from "../assets/construct.svg";
import Contact from "./Contact";
const Card = () => {
  return (
    <Container>
      <Wrapper>
        <img className="cardImg" src={cardImg} alt="construction" />
        <h1 className="head1">Coming Soon</h1>
      </Wrapper>
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 90%;
  width: 100%;
  margin: 2rem;
  display: flex;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  .cardImg {
    height: 80%;
    width: 100%;
  }
  .head1 {
    margin-top: 1rem;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    color: #6e7c7c;
    @media (max-width: 900px) {
    }
  }
  @media (max-width: 900px) {
    height: 20%;
  }
`;

export default Card;
