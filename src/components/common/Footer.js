import React from "react";
import styled from "styled-components";
import FlexBox, { FlexCSS } from "../styled/FlexBox";

const Footer = () => {
  return (
    <FooterStyled>
      <FlexBox alignItems="center">
        <div className="copyright-part">
          <p>&copy; 2021 - Chitti. All Rights Reserved</p>
        </div>
        <div className="social-part">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <span className="icon-social">&#xea90;</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <span className="icon-social">&#xea92;</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <span className="icon-social">&#xea96;</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <span className="icon-social">&#xea9d;</span>
          </a>
        </div>
      </FlexBox>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 20px 15px 10px;
  @media only screen and (min-width: 768px) {
    padding: 15px 25px;
  }
  .copyright-part {
    color: ${({ theme }) => theme.colors.white};
    flex: 100%;
    p {
      text-align: center;
      font-size: 12px;
    }
    @media only screen and (min-width: 768px) {
      flex: 50%;
      max-width: 50%;
      p {
        text-align: left;
      }
    }
  }
  .social-part {
    flex: 100%;
    ${FlexCSS}
    justify-content: center;
    align-items: center;
    margin: 20px 0 10px;
    a {
      color: ${({ theme }) => theme.colors.white};
      margin: 10px;
      font-size: 16px;
      line-height: 1;
      border-right: 1px solid transparent;
      padding-right: 5px;
      &:hover {
        border-color: ${({ theme }) => theme.colors.white};
      }
    }
    @media only screen and (min-width: 768px) {
      flex: 50%;
      max-width: 50%;
      justify-content: flex-end;
      margin: 0;
    }
  }
`;

export default Footer;
