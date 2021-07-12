import { ThemeProvider } from "styled-components";
import Head from "next/head";
import UtilStyles from "../src/GlobalStyles/utilStyles";
import FontStyles from "../src/GlobalStyles/fontStyles";
import ResetCSS from "../src/GlobalStyles/resetCss";

const theme = {
  colors: {
    black: "#252525",
    grey: "#7e7e7e",
    light: "#e0e0e0",
    white: "#ffffff",
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
      <Head>
        <title>Chitti.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <ResetCSS />
        <UtilStyles />
        <FontStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
