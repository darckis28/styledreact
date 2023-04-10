import React from "react";
import styled from "styled-components";
import { Title } from "../Title";
import Account from "../Account";

const StyledContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;
const StylesContent =styled.section`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  gap:10px;
  @media (max-width: 800px) {
    flex-direction:column;
  }
`

const Container = () => {
  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <StylesContent >
        <Account />
        <Account />
        <Account />
      </StylesContent>
    </StyledContainer>
  );
};

export default Container;
