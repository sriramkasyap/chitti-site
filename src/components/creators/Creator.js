import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from "styled-components";
import { SolidButton } from "../styled/Button";

const Creator = ({ creator }) => {
  const { colors } = useContext(ThemeContext);
  const {
    creatorId,
    profile: { displayPicture, fullName, shortBio },
  } = creator;

  return (
    <ContentDivStyled>
      <Image>
        <img src={displayPicture} alt={fullName} />
      </Image>
      <Content>
        <h2 className="creatorName">{fullName}</h2>
        <p className="shortBio">
          {shortBio ||
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
        </p>
      </Content>
      <ActionHolder>
        <a target="_blank" rel="noreferrer" href={`/creators/${creatorId}`}>
          <SolidButton className="action-button" hover={{ bgColor: colors.light, fgColor: colors.black }}>
            Read More
          </SolidButton>
        </a>
      </ActionHolder>
    </ContentDivStyled>
  );
};

const ContentDivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 15px;
  text-align: center;
  width: 33%;
  height: 350px;
  transition: all 0.3s;

  @media only screen and (min-width: 375px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 48%;
  }
  @media only screen and (min-width: 992px) {
    width: 32%;
  }
  @media only screen and (min-width: 1440px) {
    width: 24%;
  }
`;

const Image = styled.div`
  width: 150px;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.black};
  img {
    width: 150px;
    border-radius: 50%;
    filter: grayscale(100%);
  }
`;

const Content = styled.div`
  margin-top: 15px;
  .creatorName {
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
  .shortBio {
    font-size: 1rem;
    margin: 10px 10px 0;
    color: ${({ theme }) => theme.colors.grey};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

const ActionHolder = styled.div`
  margin-top: auto;
  .action-button {
    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

Creator.propTypes = {
  creator: PropTypes.instanceOf(Object),
};

Creator.defaultProps = {
  creator: {},
};

export default Creator;
