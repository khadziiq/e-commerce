import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fbd6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Desc>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
        ipsum?
      </Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
