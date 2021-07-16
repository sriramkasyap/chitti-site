import React from "react";
import styled from "styled-components";
import Container from "../styled/Container";

const ContentSection = () => {
  return (
    <ContentSectionStyled>
      <Container>
        <h1 className="main-heading">
          Your favourite Content creators, <br />
          delivered to your Inbox
        </h1>
      </Container>
    </ContentSectionStyled>
  );
};

const ContentSectionStyled = styled.section`
  padding-top: 50px;
  .main-heading {
    text-align: center;
    font-size: 24px;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.text};
  }
`;

export default ContentSection;
