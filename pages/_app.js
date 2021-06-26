import UtilStyles from "../src/utilStyles";
import { ThemeProvider } from "styled-components";
import FontStyles from "../src/fontStyles";

const theme = {
  colors: {
    black: "#252525",
  },
  fonts: {
    text: "Quicksand",
    heading: "American Typewriter",
  },
  fontWeights: {
    light: 300,
    regular: 500,
    bold: 700,
    black: 900,
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UtilStyles />
        <FontStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
