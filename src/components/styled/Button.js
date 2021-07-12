import styled, { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import React, { useContext } from "react";

const Button = styled.button`
  border-radius: 30px;
  padding: 7px 20px;
  border: 1px solid;
  border-color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ fgColor }) => fgColor};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-family: ${({ theme: { fonts } }) => fonts.text};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ hover: { bgColor } }) => bgColor};
    color: ${({ hover: { fgColor } }) => fgColor};
  }
`;

const SolidButton = ({ children, ...otherProps }) => {
  const theme = useContext(ThemeContext);
  return (
    <Button bgColor={theme.colors.black} fgColor={theme.colors.white} hover={{ bgColor: "transparent", fgColor: theme.colors.black }} {...otherProps}>
      {children}
    </Button>
  );
};

SolidButton.propTypes = {
  children: PropTypes.instanceOf(React.Component),
};

SolidButton.defaultProps = {
  children: <></>,
};

const OutlineButton = ({ children, ...otherProps }) => {
  const theme = useContext(ThemeContext);
  return (
    <Button bgColor="transparent" fgColor={theme.colors.black} hover={{ bgColor: theme.colors.black, fgColor: theme.colors.white }} {...otherProps}>
      {children}
    </Button>
  );
};

OutlineButton.propTypes = {
  children: PropTypes.instanceOf(React.Component),
};

OutlineButton.defaultProps = {
  children: <></>,
};

export { SolidButton, OutlineButton };

export default Button;
