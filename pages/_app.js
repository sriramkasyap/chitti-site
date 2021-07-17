import { ThemeProvider } from "styled-components";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import UtilStyles from "../src/GlobalStyles/utilStyles";
import Icomoon from "../src/GlobalStyles/icomoon";
import FontStyles from "../src/GlobalStyles/fontStyles";

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
    regular: 400,
    medium: 500,
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
        <link rel="stylesheet" href="/css/reset.css" />
      </Head>

      <ThemeProvider theme={theme}>
        <UtilStyles />
        <FontStyles />
        <Icomoon />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: React.Component,
  pageProps: PropTypes.object,
};

App.defaultProps = {
  Component: <></>,
  pageProps: {},
};
