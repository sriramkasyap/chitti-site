import styled from "styled-components";

const Button = styled.button`
  border-radius: 30px;
  padding: 7px 20px;
  border: 1px solid;
  border-color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ darkBg, theme: { colors } }) => (darkBg ? colors.black : "transparent")};
  color: ${({ darkBg, theme: { colors } }) => (darkBg ? colors.white : colors.black)};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-family: ${({ theme: { fonts } }) => fonts.text};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ darkBg, theme: { colors } }) => (darkBg ? "transparent" : colors.black)};
    color: ${({ darkBg, theme: { colors } }) => (darkBg ? colors.black : colors.white)};
    cursor: pointer;
  }
`;

export default Button;