import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chitti.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadingFont>American Typewriter</HeadingFont>
      <p>Quicksand</p>
    </>
  );
}

const HeadingFont = styled.h1``;
