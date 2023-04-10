import React from "react";
import styled from "styled-components";
import { Title } from "../Title";
import Account from "../Account";
import { List } from "../List";

const StyledContainer = styled.div`
  background-color: ${({theme})=>theme.body};
  color:${({theme})=>theme.text};
  min-height: 90vh;
  padding: 0px 15vw;
`;
const StylesContent =styled.section`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
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
        <List/>
      </StylesContent>
    </StyledContainer>
  );
};

export default Container;
