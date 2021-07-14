import React from "react";
import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import { SolidButton } from "../styled/Button";
import Container from "../styled/Container";
import CreatorsHolder from "./CreatorsHolder";

const HomeCreatorSection = ({ creators }) => {
  return (
    <HomeCreatorSectionStyled>
      <Container>
        <h2 className="section-heading">
          Who is writing on <strong>Chitti</strong>?
        </h2>
        <div className="section-text">
          <p>
            Content creators are often not rewarded for the quality of their content due to the limitations and nuances of their Social Media
            algorithms. Chitti intends to provide a platform for them to write, publish and distribute their content in its purest form via
            newsletters directly to their audience inboxes.
          </p>
          <p>
            Creators can easily publish their content and reach only their select and interested audience, and in doing so, are rewarded directly by
            those who find value in their content.
          </p>
        </div>
        <div className="section-cta">
          <Link href="/creators">
            <SolidButton className="explore-button">Explore Creators</SolidButton>
          </Link>
        </div>
        <CreatorsHolder creators={creators} />
      </Container>
    </HomeCreatorSectionStyled>
  );
};

HomeCreatorSection.propTypes = {
  creators: PropTypes.arrayOf(PropTypes.object),
};

HomeCreatorSection.defaultProps = {
  creators: [],
};

const HomeCreatorSectionStyled = styled.section`
  margin: 70px 0 40px;
  .section-heading {
    font-size: 30px;
    text-align: center;
    @media only screen and (min-width: 768px) {
      font-size: 35px;
    }
    @media only screen and (min-width: 992px) {
      font-size: 45px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 55px;
    }
  }
  .section-text {
    margin: 30px 0;
    max-width: 90%;
    margin: 40px auto 20px;
    @media only screen and (min-width: 768px) {
      max-width: 80%;
    }
    @media only screen and (min-width: 1200px) {
      max-width: 900px;
    }
    p {
      font-size: 16px;
      text-align: center;
      margin: 20px 0;
      @media only screen and (min-width: 992px) {
        font-size: 18px;
        line-height: 1.75;
        margin: 30px 0;
      }
      @media only screen and (min-width: 1440px) {
        font-size: 20px;
      }
    }
  }

  .section-cta {
    text-align: center;
    padding: 20px 0;
    .explore-button {
      font-size: 16px;
      padding: 8px 30px;
      @media only screen and (min-width: 768px) {
        padding: 10px 40px;
        font-size: 18px;
      }
      @media only screen and (min-width: 1200px) {
        padding: 15px 50px;
        font-size: 20px;
      }
    }
  }
`;

export default HomeCreatorSection;
