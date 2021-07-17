/* eslint-disable react/prefer-stateless-function */
import React, { createContext } from "react";
import PropTypes from "prop-types";

export const CreatorContext = createContext();

const CreatorProvider = class extends React.Component {
  render() {
    const { children } = this.props;
    return <CreatorContext.Provider {...this.props}>{children}</CreatorContext.Provider>;
  }
};

CreatorProvider.propTypes = {
  children: PropTypes.instanceOf(React.Component),
};

CreatorProvider.defaultProps = {
  children: <></>,
};

export default CreatorProvider;
