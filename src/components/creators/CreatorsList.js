import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "../styled/Container";
import Creator from "./Creator";

const CreatorsList = ({ creators }) => {
  return (
    <ContentSectionStyled>
      <Container>
        <Heading>Our Top content Creators</Heading>
        <ListDiv>
          {creators?.length > 0 &&
            creators.map((creator) => (
              <Creator key={creator.creatorId} creator={creator} />
            ))}
        </ListDiv>
      </Container>
    </ContentSectionStyled>
  );
};

const ContentSectionStyled = styled.section`
  padding-top: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
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
`;

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

CreatorsList.propTypes = {
  creators: PropTypes.instanceOf(Array),
};

CreatorsList.defaultProps = {
  creators: [],
};

export default CreatorsList;
