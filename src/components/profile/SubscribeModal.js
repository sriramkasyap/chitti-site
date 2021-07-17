import React, { useContext, useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

import { CreatorContext } from "../../context/CreatorContext";
import SubscriberEmailSection from "./SubscriberEmailSection";
import { validateEmail } from "../../utils";
import { FlexCSS } from "../styled/FlexBox";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    maxWidth: "90%",
  },
};

const SubscribeModal = (props) => {
  const { selectedPlanId, onRequestClose } = props;
  const { profile, plans, subscribeToPlan } = useContext(CreatorContext);
  const selectedPlan = plans.filter((plan) => plan._id === selectedPlanId)[0];
  const [inputData, setInputData] = useState({
    subscriberName: "",
    subscriberEmail: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInput = (event) => {
    const {
      target: { value, name },
    } = event;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    const { subscriberName, subscriberEmail } = inputData;
    e.preventDefault();
    setErrorMessage("");
    if (subscriberEmail?.length > 0 && subscriberName?.length > 0) {
      if (validateEmail(subscriberEmail)) {
        setLoading(true);
        subscribeToPlan(subscriberName, subscriberEmail, props.selectedPlanId).then((result) => {
          setLoading(false);
          if (result.success) {
            setSuccess(true);
          } else {
            setErrorMessage(result.message);
          }
        });
      } else {
        setErrorMessage("Please enter a valid email address");
      }
    } else {
      setErrorMessage("Please enter your Email address");
    }
  };

  return (
    <Modal {...props} style={customStyles} contentLabel="Subscribe">
      {isSuccess ? (
        <SuccessWrapper>
          <CloseButton onClick={onRequestClose}>X</CloseButton>
          <h3>Congratulations!</h3>
          <p>
            You have been successfully subscribed to {profile.fullName}&apos;s {selectedPlan && selectedPlan.planFee === 0 ? "Free" : "Paid"} plan
          </p>
          <div className="button-wrapper">
            <Link href="/creators" passHref>
              <button type="button">Explore more Creators</button>
            </Link>
          </div>
        </SuccessWrapper>
      ) : (
        <ModalWrapper>
          <p className="selected">
            You are subscribing to: {profile.fullName}&apos;s {selectedPlan && selectedPlan.planFee === 0 ? "Free" : "Paid"} plan
          </p>
          <SubscriberEmailSection errorMessage={errorMessage} loading={loading} inputData={inputData} onSubmit={onSubmit} onChange={handleInput} />
        </ModalWrapper>
      )}
    </Modal>
  );
};

const CloseButton = styled.button`
  background: none;
  border: 0;
  position: absolute;
  top: 15px;
  right: 15px;
  color: ${({ theme }) => theme.colors.grey};
`;

const SuccessWrapper = styled.div`
  text-align: center;
  h3 {
    font-size: 30px;
    margin: 30px 0 20px;
  }
  p {
    font-size: 16px;
    margin: 0 0 20px;
  }
  .button-wrapper {
    ${FlexCSS}
    justify-content: center;
    margin: 10px 0;
    button {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.black};
      padding: 7px 20px;
      border-radius: 50px;
      font-family: ${({ theme }) => theme.fonts.text};
      font-size: 16px;
      @media only screen and (min-width: 992px) {
        padding: 10px 30px;
      }
    }
  }
`;

const ModalWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  .selected {
    font-size: 18px;
  }
`;

SubscribeModal.propTypes = {
  onRequestClose: PropTypes.func,
  selectedPlanId: PropTypes.string,
};

SubscribeModal.defaultProps = {
  onRequestClose: () => {},
  selectedPlanId: "",
};

export default SubscribeModal;
