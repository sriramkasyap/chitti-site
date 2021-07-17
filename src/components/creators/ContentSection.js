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
        <p className="main-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
    </ContentSectionStyled>
  );
};

const ContentSectionStyled = styled.section`
  padding-top: 50px;
  .main-heading {
    text-align: center;
    font-size: 25px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.text};
    @media only screen and (min-width: 375px) {
      font-size: 20px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 30px;
    }
    @media only screen and (min-width: 992px) {
      font-size: 40px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 40px;
    }
    @media only screen and (min-width: 1440px) {
      font-size: 40px;
    }
  }
  .main-content {
    width: 70%;
    margin: 40px auto;
    text-align: center;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.text};
    @media only screen and (min-width: 375px) {
      width: 100%;
      font-size: 12px;
      margin: 20px auto;
    }
    @media only screen and (min-width: 540px) {
      width: 85%;
      font-size: 12px;
      margin: 20px auto;
    }
    @media only screen and (min-width: 768px) {
      width: 85%;
      font-size: 15px;
      margin: 25px auto;
    }
    @media only screen and (min-width: 992px) {
      font-size: 20px;
      margin: 30px auto;
    }
    @media only screen and (min-width: 1200px) {
      width: 70%;
      font-size: 20px;
    }
    @media only screen and (min-width: 1440px) {
      width: 70%;
      font-size: 20px;
    }
  }
`;

export default ContentSection;
