import PropTypes from "prop-types";

import TopBar from "../../src/components/common/TopBar";
import ContentSection from "../../src/components/creators/ContentSection";
import CreatorsList from "../../src/components/creators/CreatorsList";
import withDB from "../../src/middleware/withDB";
import Creator from "../../src/models/Creator";

export default function CreatorsListPage({ creators }) {
  return (
    <>
      <TopBar showLogo />
      <ContentSection />
      <CreatorsList creators={creators} />
    </>
  );
}

CreatorsListPage.propTypes = {
  creators: PropTypes.instanceOf(Array),
};

CreatorsListPage.defaultProps = {
  creators: [],
};

export const getStaticProps = withDB(async () => {
  let creators = await Creator.find(
    {},
    {
      _id: 1,
      profile: 1,
    }
  )
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
