import { isValidObjectId } from "mongoose";
import styled from "styled-components";
import Footer from "../../src/components/common/Footer";
import TopBar from "../../src/components/common/TopBar";
import LongBioSection from "../../src/components/profile/LongBioSection";
import PlanSection from "../../src/components/profile/PlanSection";
import ShortBioSection from "../../src/components/profile/ShortBioSection";
import CreatorProvider from "../../src/context/CreatorContext";
import withDB from "../../src/middleware/withDB";
import Creator from "../../src/models/Creator";
import SubscriptionPlan from "../../src/models/SubscriptionPlan";

export default function CreatorProfile({ creator }) {
  return (
    <>
      <TopBar />
      <CreatorProvider creator={creator}>
        <ShortBioSection id="top" />
        <SubscribeButton>
          <a href="#plans">Subscribe to My Newsletter</a>
        </SubscribeButton>
        <LongBioSection />
        <PlanSection />
      </CreatorProvider>
      <Footer />
    </>
  );
}

const SubscribeButton = styled.div`
  text-align: center;
  a {
    color: ${({ theme }) => theme.colors.white};
    padding: 7px 15px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 50px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
    }
    @media only screen and (min-width: 992px) {
      font-size: 18px;
      padding: 10px 30px;
    }
    @media only screen and (min-width: 1440px) {
      font-size: 20px;
      padding: 12px 40px;
    }
  }
`;

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
  creators = creators.map(({ _id }) => ({
    params: { creatorId: _id.toString() },
  }));

  return {
    paths: creators,
    fallback: false,
  };
});
