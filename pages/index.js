import styled from "styled-components";
import TopBar from "../src/components/common/TopBar";

export default function Home() {
  return (
    <>
      <TopBar showLogo={false} />
      <Banner></Banner>
    </>
  );
}

let Banner = styled.div``;
