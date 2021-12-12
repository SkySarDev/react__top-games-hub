import React from "react";
import styled from "styled-components";

import { CardAbsoluteDiv } from "components/UI/styles";

const SpinnerWrapper = styled(CardAbsoluteDiv)`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;
  background-color: #1b1b1b;
`;

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #e2e0d0;
    stroke-linecap: round;
    animation: dash 1.2s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const CardSpinner = () => {
  return (
    <SpinnerWrapper>
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </StyledSpinner>
    </SpinnerWrapper>
  );
};

export default CardSpinner;
