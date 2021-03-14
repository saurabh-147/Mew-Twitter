import React from "react";
import styled from "styled-components";
import JoinUs from "./JoinUs";

const Card = () => {
  return (
    <Container>
      <JoinUs />
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  height: 90%;
  width: 85%;
  margin: 2rem;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export default Card;
