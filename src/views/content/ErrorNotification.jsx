import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MainContentLayout from "components/UI/MainContentLayout";

const ErrorMessage = styled.p`
  margin: 50px 0;
  font-size: 24px;
  text-align: center;
`;

const ErrorNotification = ({ error }) => {
  return (
    <MainContentLayout title={"Error"}>
      <ErrorMessage>{error}</ErrorMessage>
    </MainContentLayout>
  );
};

export default ErrorNotification;

ErrorNotification.propTypes = {
  error: PropTypes.string.isRequired,
};
