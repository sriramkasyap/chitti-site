import TopBar from "../src/components/common/TopBar";
import HomeBanner from "../src/components/home/HomeBanner";
import HomeCreatorSection from "../src/components/home/HomeCreatorSection";
import Creator from "../src/models/Creator";

export default function Home({ creators }) {
  return (
    <>
      <TopBar showLogo={false} />
      <HomeBanner />
      <HomeCreatorSection creators={creators} />
    </>
  );
}

export const getStaticProps = async () => {
  let creators = await Creator.find(
    {},
    {
      _id: 1,
      profile: 1,
    }
  )
    .limit(27)
    .lean();
  creators = creators.map(({ _id, profile }) => ({ creatorId: _id.toString(), profile }));

  return {
    props: {
      creators,
    },
  };
};
