import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { FlexCSS } from "../styled/FlexBox";

const CreatorKeyBlock = ({ creator, keyVal }) => {
  return (
    <CreatorKeyBlockStyled>
      <img src={creator.profile.displayPicture} alt="" />
      <div className="gradient-overlay" />
      <div className="button-overlay">{keyVal}</div>
      <p className="creator-name">{creator.profile.fullName}</p>
    </CreatorKeyBlockStyled>
  );
};

CreatorKeyBlock.propTypes = {
  keyVal: PropTypes.string,
  creator: PropTypes.shape({
    profile: PropTypes.shape({
      displayPicture: PropTypes.string,
      fullName: PropTypes.string,
    }),
  }),
};

CreatorKeyBlock.defaultProps = {
  keyVal: "",
  creator: {
    profile: {
      displayPicture: "",
      fullName: "",
    },
  },
};

const TransitionCSS = "transition: all 0.2s ease-in-out;";

const CreatorKeyBlockStyled = styled.div`
  margin: 10px;
  border-radius: 50%;
  max-width: 60px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  position: relative;
  cursor: pointer;
  ${TransitionCSS}
  @media only screen and (min-width: 768px) {
    margin: 10px 7px;
  }
  @media only screen and (min-width: 992px) {
    margin: 12px;
    max-width: 75px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 85px;
    margin: 16px;
  }
  img {
    filter: grayscale(100%);
    z-index: 1;
    position: relative;
    border-radius: 50%;
  }
  .gradient-overlay {
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: linear-gradient(to bottom, rgba(37, 37, 37, 0.3), rgba(37, 37, 37, 0.3));
    z-index: 2;
    ${TransitionCSS}
  }
  .button-overlay {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 3;
    opacity: 0;
    color: ${({ theme }) => theme.colors.white};
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    ${FlexCSS}
    align-items: center;
    justify-content: center;
    ${TransitionCSS}
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    @media only screen and (min-width: 992px) {
      font-size: 40px;
    }
  }
  .creator-name {
    position: absolute;
    bottom: 0;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    color: ${({ theme }) => theme.colors.black};
    ${TransitionCSS}
    z-index: 1;
    font-size: 12px;
    white-space: nowrap;
  }
  @media only screen and (min-width: 768px) {
    &:hover {
      .button-overlay {
        opacity: 1;
      }
      .creator-name {
        transform: translateX(-50%) translateY(110%);
        opacity: 1;
      }
    }
  }
`;

export default CreatorKeyBlock;
