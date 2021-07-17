import React, { useContext } from "react";
import styled from "styled-components";
import { CreatorContext } from "../../context/CreatorContext";
import Container from "../styled/Container";
import { FlexCSS } from "../styled/FlexBox";

const LongBioSection = () => {
  const { profile } = useContext(CreatorContext);
  return (
    <Container>
      <LongBioSectionStyled>
        <p>
          {profile.fullBio ||
            `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `}
        </p>
      </LongBioSectionStyled>
    </Container>
  );
};

const LongBioSectionStyled = styled.section`
  padding: 20px 0;
  ${FlexCSS}
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    padding: 30px 0 20px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 50px 0 20px;
  }
  p {
    text-align: center;
    font-size: 14px;
    margin: 0px 0 15px;
    max-width: 90%;
    white-space: break-spaces;
    color: ${({ theme }) => theme.colors.grey};
    @media only screen and (min-width: 768px) {
      max-width: 600px;
      font-size: 16px;
      margin: 0 0 25px;
    }
    @media only screen and (min-width: 992px) {
      max-width: 800px;
      margin: 0 0 40px;
    }
    @media only screen and (min-width: 1200px) {
      max-width: 1140px;
    }
  }
`;

export default LongBioSection;
