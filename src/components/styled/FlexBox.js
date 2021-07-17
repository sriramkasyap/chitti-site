import styled from "styled-components";

const FlexCSS = ({ alignItems }) => `
  display: flex;
  flex-direction: row;
  align-items: ${alignItems || "flex-start"};
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const FlexBox = styled.div`
  ${FlexCSS}
`;
export default FlexBox;
export { FlexCSS };
