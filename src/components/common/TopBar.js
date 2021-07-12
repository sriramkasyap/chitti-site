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
        <FlexBox>
          {showLogo ? <></> : <></>}
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
  }
`;

export default TopBar;
