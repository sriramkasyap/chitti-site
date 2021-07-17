/* eslint-disable react/no-array-index-key */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CreatorContext } from "../../context/CreatorContext";
import { limitFloat } from "../../utils";
import Container from "../styled/Container";
import { FlexCSS } from "../styled/FlexBox";
import SubscribeModal from "./SubscribeModal";

const PlanSection = () => {
  const { plans } = useContext(CreatorContext);
  const freePlan = plans.filter((plan) => plan.planFee === 0)[0];
  const paidPlan = plans.filter((plan) => plan.planFee > 0)[0] || null;

  const [isModalOpen, toggleModal] = useState(false);
  const [selectedPlanId, setPlanId] = useState();

  const afterOpenModal = () => {
    console.log("Modal Open");
  };

  const closeModal = () => {
    setPlanId(null);
    toggleModal(false);
  };

  const selectPlan = (planId) => {
    console.log("clicked");
    setPlanId(planId);
    toggleModal(true);
  };

  return (
    <PlanSectionStyled id="plans">
      <Container>
        <h2 className="sub-heading">Read some of my free content first. If you like it, do consider upgrading to paid plan.</h2>
        <div className="plan-holder">
          <Plan free>
            <h3 className="plan-heading">Free Plan</h3>
            <h2 className="plan-fee">₹ {limitFloat(freePlan.planFee)}</h2>
            <hr />
            {freePlan.planFeatures.length > 0 ? (
              <ul className="plan-features">
                {freePlan.planFeatures.map((feature, f) => (
                  <li key={f}>{feature}</li>
                ))}
              </ul>
            ) : (
              <p>This plan does not have any features yet.</p>
            )}
            <hr />
            <SubscribeButton onClick={() => selectPlan(freePlan._id)}>Select Plan</SubscribeButton>
          </Plan>
          {plans.length > 1 ? (
            <Plan>
              <h3 className="plan-heading">Paid Plan</h3>
              <h2 className="plan-fee">₹ {limitFloat(paidPlan.planFee)}</h2>
              <h5 className="per-month">per month</h5>
              <hr />
              {paidPlan.planFeatures.length > 0 ? (
                <ul className="plan-features">
                  {paidPlan.planFeatures.map((feature, f) => (
                    <li key={f}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p>This plan does not have any features yet.</p>
              )}
              <hr />
              <SubscribeButton onClick={() => selectPlan(paidPlan._id)} alternate>
                Select Plan
              </SubscribeButton>
            </Plan>
          ) : (
            <></>
          )}
        </div>
        <SubscribeModal selectedPlanId={selectedPlanId} isOpen={isModalOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} />
      </Container>
    </PlanSectionStyled>
  );
};

const PlanSectionStyled = styled.section`
  .sub-heading {
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    margin: 0 auto;
    @media only screen and (min-width: 768px) {
      font-size: 30px;
      max-width: 500px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 35px;
      max-width: 800px;
    }
  }
  .plan-holder {
    margin: 50px 0;
    ${FlexCSS}
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 992px) {
      margin: 60px 0;
    }
  }
`;

const Plan = styled.div`
  border: 1px solid ${({ theme, free }) => (free ? theme.colors.grey : theme.colors.black)};
  background-color: ${({ theme, free }) => (free ? theme.colors.light : theme.colors.black)};
  padding: 30px 20px;
  text-align: center;
  width: 300px;
  max-width: 100%;
  @media only screen and (min-width: 992px) {
    padding: 35px 30px;
    width: 350px;
  }
  .plan-heading {
    text-align: center;
    font-size: 20px;
    color: ${({ theme, free }) => (free ? theme.colors.black : theme.colors.white)};
    margin: 0 0 15px;
    @media only screen and (min-width: 992px) {
      font-size: 24px;
    }
  }
  .plan-fee {
    text-align: center;
    font-size: 35px;
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme, free }) => (free ? theme.colors.black : theme.colors.white)};
    margin: 0;
    @media only screen and (min-width: 992px) {
      font-size: 50px;
      margin-top: 20px;
    }
  }
  .per-month {
    font-size: 16px;
    text-align: center;
    color: ${({ theme, free }) => (free ? theme.colors.black : theme.colors.white)};
    font-family: ${({ theme }) => theme.fonts.text};
    margin: 10px 0 20px;
  }
  hr {
    opacity: 0.5;
  }
  .plan-features {
    padding: 15px 015px 15px;
    p {
      color: ${({ theme, free }) => (free ? theme.colors.black : theme.colors.white)};
    }
    li {
      font-size: 14px;
      line-height: 1.5;
      margin: 5px 0;
      list-style: " - ";
      text-align: left;
      color: ${({ theme, free }) => (free ? theme.colors.black : theme.colors.white)};
      @media only screen and (min-width: 992px) {
        font-size: 16px;
        margin: 7px 0;
      }
    }
  }
`;

const SubscribeButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme, alternate }) => (alternate ? theme.colors.white : "transparent")};
  border-radius: 40px;
  font-size: 16px;
  line-height: 1;
  padding: 7px 20px;
  font-family: ${({ theme }) => theme.fonts.text};
  margin: 20px 0 0;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme, alternate }) => (alternate ? theme.colors.white : theme.colors.black)};
  }
`;

export default PlanSection;
