import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chitti.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadingFont>Chitti.</HeadingFont>
      <p>Work in Progress</p>
    </>
  );
}

const HeadingFont = styled.h1``;
