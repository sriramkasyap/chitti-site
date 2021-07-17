import React, { useContext } from "react";
import styled from "styled-components";
import { CreatorContext } from "../../context/CreatorContext";
import Container from "../styled/Container";
import { FlexCSS } from "../styled/FlexBox";

const ShortBioSection = () => {
  const { profile } = useContext(CreatorContext);
  return (
    <Container>
      <ShortBioSectionStyled>
        <CreatorDisplayPicture src={profile.displayPicture} alt="" />
        <CreatorName>{profile.fullName}</CreatorName>

        <CreatorShortBio>
          {profile.shortBio ||
            "Hi, This is the Creator's Short bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos enim ipsum voluptate nemo? Autem atque consequatur quisquam quasi tempora explicabo? Provident, omnis nulla nam molestiae assumenda saepe neque quae aut?"}
        </CreatorShortBio>
      </ShortBioSectionStyled>
    </Container>
  );
};

const ShortBioSectionStyled = styled.section`
  padding-top: 50px;
  ${FlexCSS}
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  @media only screen and (min-width: 768px) {
    padding-top: 65px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 80px;
  }
`;

const CreatorDisplayPicture = styled.img`
  filter: grayscale(100%);
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  width: 120px;
  @media only screen and (min-width: 768px) {
    width: 150px;
  }
  @media only screen and (min-width: 1200px) {
    width: 175px;
  }
`;

const CreatorName = styled.h1`
  text-align: center;
  font-size: 25px;
  margin: 20px 0;
  font-family: ${({ theme }) => theme.fonts.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  @media only screen and (min-width: 768px) {
    font-size: 35px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 50px;
    margin: 30px 0;
  }
`;

const CreatorShortBio = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 0px 0 15px;
  max-width: 90%;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  @media only screen and (min-width: 768px) {
    max-width: 500px;
    font-size: 18px;
    margin: 0 0 25px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 24px;
    max-width: 650px;
    margin: 0 0 40px;
  }
`;

export default ShortBioSection;
