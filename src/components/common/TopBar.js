import React from "react";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import Container from "../styled/Container";
import FlexBox from "../styled/FlexBox";

const TopBar = ({ showLogo }) => {
  return (
    <TopBarStyled>
      <Container>
        <FlexBox alignItems="center">
          {showLogo ? (
            <Link href="/" as="/">
              <LogoHolder>
                <h1>Chitti.</h1>
              </LogoHolder>
            </Link>
          ) : (
            <></>
          )}
          <div className="user-auth-menu">
            <Link href="/login">Login/Signup</Link>
          </div>
        </FlexBox>
      </Container>
    </TopBarStyled>
  );
};

TopBar.propTypes = {
  showLogo: PropTypes.bool,
};

TopBar.defaultProps = {
  showLogo: true,
};

const TopBarStyled = styled.div`
  padding-top: 20px;
  padding-bottom: 15px;
  @media only screen and (min-width: 992px) {
    padding-top: 30px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 40px;
  }
  .user-auth-menu {
    margin-left: auto;
    font-size: 12px;
    @media only screen and (min-width: 768px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 16px;
    }
  }
`;

const LogoHolder = styled.div`
  h1 {
    cursor: pointer;
    font-size: 22px;
    @media only screen and (min-width: 768px) {
      font-size: 26px;
    }
    @media only screen and (min-width: 992px) {
      font-size: 30px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 36px;
    }
    @media only screen and (min-width: 1440px) {
      font-size: 40px;
    }
  }
`;

export default TopBar;
