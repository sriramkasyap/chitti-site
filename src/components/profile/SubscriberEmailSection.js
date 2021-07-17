import React from "react";
import styled from "styled-components";
import Container from "../styled/Container";
import { FlexCSS } from "../styled/FlexBox";

const SubscriberEmailSection = () => {
  return (
    <Container>
      <SubscriberEmailSectionStyled>
        <div className="input-wrapper">
          <input
            className="email-input"
            type="email"
            placeholder="Your Email Address"
          />
          <button className="email-submit" type="submit">
            Subscribe
          </button>
        </div>
      </SubscriberEmailSectionStyled>
    </Container>
  );
};

const SubscriberEmailSectionStyled = styled.div`
  margin: 20px 0;
  ${FlexCSS}
  justify-content: center;
  .input-wrapper {
    ${FlexCSS}
    flex-wrap: nowrap;
    align-items: stretch;
  }
  .email-input {
    border: 1px solid ${({ theme }) => theme.colors.light};
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    font-size: 14px;
    padding: 10px 15px;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
      padding-left: 20px;
      width: 300px;
      display: block;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 18px;
      padding: 12px 25px;
    }
  }
  .email-submit {
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.text};
    padding: 7px 15px;
    font-size: 14px;
    cursor: pointer;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 18px;
      padding: 12px 20px;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export default SubscriberEmailSection;
