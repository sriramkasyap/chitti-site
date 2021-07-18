import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Footer from "../../src/components/common/Footer";
import Pagination from "../../src/components/common/Paginaton";

import TopBar from "../../src/components/common/TopBar";
import ContentSection from "../../src/components/creators/ContentSection";
import CreatorsList from "../../src/components/creators/CreatorsList";
import { getCreators } from "../../src/helpers/creatorHelper";
import withDB from "../../src/middleware/withDB";
import Creator from "../../src/models/Creator";

export default function CreatorsListPage({ creators, limit, page, total }) {
  const [creatorslist, setCreators] = useState(creators);
  const [pagination, setPagination] = useState({ page, limit });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCreators({ ...pagination }).then((result) => {
      setLoading(false);
      if (result.success) {
        setCreators(result.creators);
      }
    });
  }, [pagination]);

  return (
    <>
      <TopBar showLogo />
      <ContentSection />
      <CreatorsList creators={creatorslist} />
      <Pagination {...pagination} setPagination={setPagination} totalCount={total} loading={loading} />
      <Footer />
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
  const limit = 16;
  let creators = await Creator.find(
    {},
    {
      _id: 1,
      profile: 1,
    }
  )
    .sort({ registeredAt: -1 })
    .limit(limit)
    .lean();
  creators = creators.map(({ _id, profile }) => ({
    creatorId: _id.toString(),
    profile,
  }));

  const total = await Creator.countDocuments();

  return {
    props: {
      creators,
      limit,
      page: 0,
      total,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
});
