import TopBar from "../src/components/common/TopBar";
import HomeBanner from "../src/components/home/HomeBanner";
import HomeCreatorSection from "../src/components/home/HomeCreatorSection";

export default function Home() {
  return (
    <>
      <TopBar showLogo={false} />
      <HomeBanner />
      <HomeCreatorSection />
    </>
  );
}
