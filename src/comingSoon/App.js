import React from "react";
import styled from "styled-components";
import comingImg from "../assets/construct.svg";
import joinImg from "../assets/join.svg";
import Card1 from "./Card1";
import Card2 from "./Card2";

const App = () => {
  return (
    <Container>
      <Wrapper1>
        <Wrap1>
          <img className="comingImg" src={comingImg} alt="construction" />
          <h1 className="comingHead">We are Coming soon</h1>
        </Wrap1>
        <Card1 />
      </Wrapper1>
      <Wrapper2>
        <Card2 />
        <Wrap2>
          <img className="joinImg" src={joinImg} alt="construction" />
          <h1 className="joinHead">JOIN US AT VIRTUERA</h1>
        </Wrap2>
      </Wrapper2>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper1 = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Wrap1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .comingImg {
    height: 80%;
    width: 70%;
  }
  .comingHead {
    color: #ff7f50;
  }
`;

const Wrapper2 = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const Wrap2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .joinImg {
    height: 80%;
    width: 70%;
  }
  .joinHead {
    color: #ff7f50;
  }
`;
export default App;
