import { isValidObjectId } from "mongoose";
import TopBar from "../../src/components/common/TopBar";
import LongBioSection from "../../src/components/profile/LongBioSection";
import ShortBioSection from "../../src/components/profile/ShortBioSection";
import SubscriberEmailSection from "../../src/components/profile/SubscriberEmailSection";
import CreatorProvider from "../../src/context/CreatorContext";
import withDB from "../../src/middleware/withDB";
import Creator from "../../src/models/Creator";
import SubscriptionPlan from "../../src/models/SubscriptionPlan";

export default function CreatorProfile({ creator }) {
  return (
    <>
      <TopBar />
      <CreatorProvider value={creator}>
        <ShortBioSection />
        <SubscriberEmailSection />
        <LongBioSection />
      </CreatorProvider>
    </>
  );
}

export const getStaticProps = withDB(async ({ params: { creatorId } }) => {
  if (!isValidObjectId(creatorId)) throw { statusCode: 404, message: "Creator Not found" };

  const creator = await Creator.findById(creatorId, {
    profile: 1,
    plans: 1,
  }).lean();

  const plans = await SubscriptionPlan.find(
    {
      _id: { $in: creator.plans },
    },
    { creator: 0 }
  ).lean();

  if (!creator || !creator.profile) throw { statusCode: 404, message: "Creator Not found" };

  return {
    props: {
      creator: {
        creatorId,
        profile: creator.profile,
        plans: JSON.parse(JSON.stringify(plans)),
      },
    },
  };
});

export const getStaticPaths = withDB(async () => {
  let creators = await Creator.find(
    {},
    {
      _id: 1,
    }
  ).lean();
  creators = creators.map(({ _id }) => ({ params: { creatorId: _id.toString() } }));

  return {
    paths: creators,
    fallback: false,
  };
});
