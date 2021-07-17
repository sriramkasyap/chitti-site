import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FlexBox from "../styled/FlexBox";
import CreatorKeyBlock from "./CreatorKeyBlock";
import { getKeyboardMapValue } from "../../utils";

const CreatorsHolder = ({ creators }) => {
  return (
    <CreatorsHolderStyled>
      <FlexBox className="key-row row-1">
        {creators.slice(0, 10).map((creator, c) => (
          <CreatorKeyBlock
            creator={creator}
            key={creator.creatorId}
            keyVal={getKeyboardMapValue(c)}
          />
        ))}
      </FlexBox>
      <FlexBox className="key-row row-2">
        {creators.slice(10, 19).map((creator, c) => (
          <CreatorKeyBlock
            creator={creator}
            key={creator.creatorId}
            keyVal={getKeyboardMapValue(c + 10)}
          />
        ))}
      </FlexBox>
      <FlexBox className="key-row row-3">
        {creators.slice(19, 27).map((creator, c) => (
          <CreatorKeyBlock
            creator={creator}
            key={creator.creatorId}
            keyVal={getKeyboardMapValue(c + 19)}
          />
        ))}
      </FlexBox>
    </CreatorsHolderStyled>
  );
};

CreatorsHolder.propTypes = {
  creators: PropTypes.arrayOf(PropTypes.object),
};

CreatorsHolder.defaultProps = {
  creators: [],
};

const CreatorsHolderStyled = styled.div`
  margin: 30px 0;
  .key-row {
    justify-content: center;
    align-items: center;
    display: none;
    &.row-1 {
      display: flex;
    }
    @media only screen and (min-width: 768px) {
      flex-wrap: nowrap;
      margin-left: -15px;
      margin-right: -15px;
      &.row-2,
      &.row-3 {
        display: flex;
      }
    }
  }
`;

export default CreatorsHolder;
