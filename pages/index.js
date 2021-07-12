import TopBar from "../src/components/common/TopBar";
import HomeBanner from "../src/components/home/HomeBanner";

export default function Home() {
  return (
    <>
      <TopBar showLogo={false} />
      <HomeBanner />
    </>
  );
}
