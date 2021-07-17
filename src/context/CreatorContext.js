/* eslint-disable react/prefer-stateless-function */
import React, { createContext } from "react";
import PropTypes from "prop-types";
import { subscribeToCreatorPlan } from "../helpers/creatorHelper";

export const CreatorContext = createContext();

const CreatorProvider = class extends React.Component {
  subscribeToPlan = (email, planId) => {
    return subscribeToCreatorPlan(email, planId);
  };

  render() {
    const { children, creator } = this.props;
    return <CreatorContext.Provider value={{ ...creator, subscribeToPlan: this.subscribeToPlan }}>{children}</CreatorContext.Provider>;
  }
};

CreatorProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component),
    PropTypes.arrayOf(React.Component),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]),
  creator: PropTypes.object,
};

CreatorProvider.defaultProps = {
  children: <></>,
  creator: {},
};

export default CreatorProvider;
