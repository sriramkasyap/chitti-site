import Footer from "../src/components/common/Footer";
import TopBar from "../src/components/common/TopBar";
import HomeBanner from "../src/components/home/HomeBanner";
import HomeCreatorSection from "../src/components/home/HomeCreatorSection";
import withDB from "../src/middleware/withDB";
import Creator from "../src/models/Creator";

export default function Home({ creators }) {
  return (
    <>
      <TopBar showLogo={false} />
      <HomeBanner />
      <HomeCreatorSection creators={creators} />
      <Footer />
    </>
  );
}

export const getStaticProps = withDB(async () => {
  let creators = await Creator.find(
    {},
    {
      _id: 1,
      profile: 1,
    }
  )
    .sort({ registeredAt: -1 })
    .limit(27)
    .lean();
  creators = creators.map(({ _id, profile }) => ({
    creatorId: _id.toString(),
    profile,
  }));

  return {
    props: {
      creators,
    },
  };
});
