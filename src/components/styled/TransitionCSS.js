const TransitionCSS = (props) => `
  transition: all ${props.timing ? props.timing : "0.2s"} ${props.function ? props.function : "ease-in-out"}`;

export default TransitionCSS;
