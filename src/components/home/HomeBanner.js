import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "../styled/Button";
import Container from "../styled/Container";
import { FlexCSS } from "../styled/FlexBox";

const HomeBanner = () => {
  return (
    <>
      <Banner>
        <Container>
          <h1 className="main-heading">Chitti.</h1>
          <div className="main-content">
            <p>
              A Newsletter publication and distribution platform to help Content creators reach their audience directly and monetize from the loyal
              ones.
            </p>
            <div className="action-holder">
              <Link href={process.env.NEXT_PUBLIC_DASHBOARD_LINK}>
                <Button className="action-button" darkBg>
                  Start a Newsletter
                </Button>
              </Link>
              <Button className="action-button" darkBg={false}>
                Explore Creators
              </Button>
            </div>
          </div>
        </Container>
      </Banner>
    </>
  );
};

const Banner = styled.div`
  padding-top: 40px;
  .main-heading {
    font-size: 45px;
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
  .main-content {
    margin: 30px 0;
    padding-left: 5px;
    max-width: 90%;
    p {
      margin: 20px 0;
      font-size: 20px;
      line-height: 1.5;
    }
  }
  .action-holder {
    ${FlexCSS}
    .action-button {
      flex: 100%;
      max-width: 200px;
      font-size: 16px;
      margin: 10px 10px 0px 0;
      padding-top: 10px;
      padding-bottom: 10px;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
    }
  }
`;

export default HomeBanner;
