/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CreatorContext } from "../../context/CreatorContext";
import SubscriberEmailSection from "./SubscriberEmailSection";
import { validateEmail } from "../../utils";

const customStyles = {
  content: {
    top: "20%",
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
  const { plans, subscribeToPlan } = useContext(CreatorContext);
  const selectedPlan = plans.filter((plan) => plan._id === props.selectedPlanId)[0];
  const [emailId, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (emailId && emailId.length > 0) {
      if (validateEmail(emailId)) {
        setLoading(true);
        await subscribeToPlan(emailId, props.selectedPlanId);
      } else {
        setErrorMessage("Please enter a valid email address");
      }
    } else {
      setErrorMessage("Please enter your Email address");
    }
  };

  return (
    <Modal {...props} style={customStyles} contentLabel="Subscribe">
      <ModalWrapper>
        <p className="selected">You have selected: {selectedPlan && selectedPlan.planFee === 0 ? "Free" : "Paid"} plan</p>
        <SubscriberEmailSection
          errorMessage={errorMessage}
          loading={loading}
          onSubmit={onSubmit}
          value={emailId}
          onChange={(e) => setEmail(e.target.value)}
        />
      </ModalWrapper>
    </Modal>
  );
};

const ModalWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  .selected {
    font-size: 18px;
  }
`;

SubscribeModal.propTypes = {
  closeModal: PropTypes.func,
  selectedPlanId: PropTypes.string,
};

SubscribeModal.defaultProps = {
  closeModal: () => {},
  selectedPlanId: "",
};

export default SubscribeModal;
