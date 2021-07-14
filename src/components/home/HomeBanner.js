import Link from "next/link";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { OutlineButton, SolidButton } from "../styled/Button";
import Container from "../styled/Container";
import FlexBox, { FlexCSS } from "../styled/FlexBox";

const HomeBanner = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <>
      <Banner>
        <Container>
          <FlexBox>
            <ContentPart>
              <h1 className="main-heading">Chitti.</h1>
              <div className="main-content">
                <p>
                  A Newsletter publication and distribution platform to help Content creators reach their audience directly and monetize from the
                  loyal ones.
                </p>
                <div className="action-holder">
                  <SolidButton className="action-button" hover={{ bgColor: colors.light, fgColor: colors.black }}>
                    <a target="_blank" rel="noreferrer" href={process.env.NEXT_PUBLIC_DASHBOARD_LINK}>
                      Start a Newsletter
                    </a>
                  </SolidButton>
                  <Link href="/creators">
                    <OutlineButton className="action-button">Explore Creators</OutlineButton>
                  </Link>
                </div>
              </div>
            </ContentPart>
            <ImagePart>
              <img src="/images/typewriter.png" alt="" />
            </ImagePart>
          </FlexBox>
        </Container>
      </Banner>
    </>
  );
};

const Banner = styled.div`
  padding-top: 40px;
  @media only screen and (min-width: 768px) {
    padding-top: 60px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 100px;
  }
  .main-heading {
    font-size: 45px;
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    @media only screen and (min-width: 768px) {
      font-size: 55px;
    }
    @media only screen and (min-width: 992px) {
      font-size: 60px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 80px;
    }
    @media only screen and (min-width: 1440px) {
      font-size: 90px;
    }
  }
  .main-content {
    margin: 30px 0;
    padding-left: 5px;
    max-width: 90%;
    @media only screen and (min-width: 768px) {
      max-width: 400px;
      margin: 40px 0;
    }
    @media only screen and (min-width: 992px) {
      max-width: 450px;
    }
    @media only screen and (min-width: 1200px) {
      max-width: 550px;
    }
    @media only screen and (min-width: 1440px) {
      max-width: 650px;
      margin-top: 50px;
    }
    p {
      margin: 20px 0;
      font-size: 20px;
      line-height: 1.5;
      @media only screen and (min-width: 1200px) {
        font-size: 24px;
        margin-bottom: 30px;
      }
      @media only screen and (min-width: 1440px) {
        font-size: 30px;
        margin-bottom: 50px;
      }
    }
  }
  .action-holder {
    ${FlexCSS}
    @media only screen and (min-width: 992px) {
      flex-wrap: nowrap;
    }
    .action-button {
      flex: 100%;
      max-width: 200px;
      font-size: 16px;
      margin: 10px 10px 0px 0;
      padding-top: 10px;
      padding-bottom: 10px;
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      a {
        color: inherit;
      }
      @media only screen and (min-width: 992px) {
        margin-right: 20px;
        font-size: 18px;
      }
      @media only screen and (min-width: 1440px) {
        margin-right: 30px;
        font-size: 20px;
        max-width: 260px;
      }
    }
  }
`;

const ContentPart = styled.div`
  flex: 100%;
`;

const ImagePart = styled.div`
  flex: 100%;
  img {
    max-width: 300px;
    margin: 20px auto 0;
    @media only screen and (min-width: 768px) {
      margin-right: 0;
      margin-top: -100px;
      max-width: 350px;
    }
    @media only screen and (min-width: 992px) {
      max-width: 400px;
    }
    @media only screen and (min-width: 1200px) {
      max-width: 500px;
      margin-top: -150px;
    }
    @media only screen and (min-width: 1440px) {
      max-width: 650px;
      margin-top: -200px;
    }
  }
`;

export default HomeBanner;
