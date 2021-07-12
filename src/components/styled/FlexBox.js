import styled from "styled-components";

const FlexCSS = () => `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const FlexBox = styled.div`
  ${FlexCSS}
`;
export default FlexBox;
export { FlexCSS };
