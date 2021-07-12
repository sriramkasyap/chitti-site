import React from "react";
import Link from "next/link";
import styled from "styled-components";
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

const TopBarStyled = styled.div`
  padding-top: 25px;
  padding-bottom: 15px;
  .user-auth-menu {
    margin-left: auto;
  }
`;

export default TopBar;
