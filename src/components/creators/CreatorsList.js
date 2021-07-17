import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "../styled/Container";
import { FlexCSS } from "../styled/FlexBox";
import Creator from "./Creator";

const CreatorsList = ({ creators }) => {
  return (
    <ContentSectionStyled>
      <Container>
        <Heading>Our Top content Creators</Heading>
        <ListDiv>{creators?.length > 0 && creators.map((creator) => <Creator key={creator.creatorId} creator={creator} />)}</ListDiv>
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
  font-family: ${({ theme }) => theme.fonts.heading};
  @media only screen and (min-width: 992px) {
    font-size: 30px;
  }
`;

const ListDiv = styled.div`
  ${FlexCSS}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0 100px;
  @media only screen and (min-width: 375px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
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
