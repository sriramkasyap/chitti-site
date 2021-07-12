import React from "react";
import styled from "styled-components";
import Container from "../styled/Container";

const HomeCreatorSection = () => {
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
      </Container>
    </HomeCreatorSectionStyled>
  );
};

const HomeCreatorSectionStyled = styled.section`
  margin: 70px 0 40px;
  .section-heading {
    font-size: 30px;
    text-align: center;
  }
  .section-text {
    margin: 30px 0;
    p {
      font-size: 16px;
      text-align: center;
      max-width: 90%;
      margin: 20px auto;
    }
  }
`;

export default HomeCreatorSection;
