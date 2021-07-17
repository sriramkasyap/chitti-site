import { ThemeProvider } from "styled-components";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import NProgress from "nprogress";
import { Router } from "next/dist/client/router";
import UtilStyles from "../src/GlobalStyles/utilStyles";
import Icomoon from "../src/GlobalStyles/icomoon";
import FontStyles from "../src/GlobalStyles/fontStyles";

import "nprogress/nprogress.css";

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
  NProgress.configure({
    easing: "ease",
    speed: 800,
    showSpinner: false,
    parent: "body",
    minimum: 0.08,
  });

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

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
