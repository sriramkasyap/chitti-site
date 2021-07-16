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
            <>
              <LogoHolder>
                <h1>Chitti.</h1>
              </LogoHolder>
            </>
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
  .user-auth-menu {
    margin-left: auto;
    font-size: 12px;
    @media only screen and (min-width: 992px) {
      font-size: 14px;
    }
  }
`;

const LogoHolder = styled.div`
  h1 {
    font-size: 22px;
  }
`;

export default TopBar;
