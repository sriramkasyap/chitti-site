import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from "styled-components";

import Container from "../styled/Container";
import { SolidButton } from "../styled/Button";
import { noop } from "../../utils";

const SubscriberEmailSection = ({ loading, errorMessage, inputData, onChange, onSubmit }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <SubscriberEmailSectionStyled>
        <div className="input-wrapper">
          <input
            type="text"
            name="subscriberName"
            value={inputData.subscriberName}
            onChange={onChange}
            className="subscription-input"
            placeholder="Your Full Name"
          />
          <input
            type="email"
            name="subscriberEmail"
            value={inputData.subscriberEmail}
            onChange={onChange}
            className="subscription-input"
            placeholder="Your Email Address"
          />
          <SolidButton className="email-submit" type="submit" onClick={onSubmit} hover={{ bgColor: colors.light, fgColor: colors.black }}>
            {loading ? <LoadingImage src="/images/loader_white.gif" alt="" /> : "Subscribe"}
          </SolidButton>
        </div>
        <p className="error-message">{errorMessage}</p>
      </SubscriberEmailSectionStyled>
    </Container>
  );
};

const LoadingImage = styled.img`
  max-height: 40px;
  margin: -15px 0;
`;

const SubscriberEmailSectionStyled = styled.div`
  margin: 20px 0;
  justify-content: center;
  .input-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  .subscription-input {
    width: 100%;
    margin-bottom: 15px;
    border: 1px solid ${({ theme }) => theme.colors.light};
    font-size: 14px;
    padding: 10px 15px;
    text-align: center;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
    @media only screen and (min-width: 768px) {
      font-size: 16px;
      padding-left: 20px;
      width: 300px;
      display: block;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 18px;
      padding: 12px 25px;
    }
  }
  .email-submit {
    font-family: ${({ theme }) => theme.fonts.text};
    padding: 7px 15px;
    font-size: 14px;
    text-align: center;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 18px;
      padding: 12px 20px;
    }
  }
  .error-message {
    font-size: 12px;
    color: red;
    text-align: center;
    margin-top: 10px;
  }
`;

SubscriberEmailSection.propTypes = {
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
  inputData: PropTypes.instanceOf(Object),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

SubscriberEmailSection.defaultProps = {
  loading: false,
  errorMessage: "",
  inputData: {},
  onChange: noop,
  onSubmit: noop,
};

export default SubscriberEmailSection;
