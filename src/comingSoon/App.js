import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.png";
import Card from "./Card";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Card />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eef3fa;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  background-image: url(${bgImg});
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
