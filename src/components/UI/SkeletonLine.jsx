import React from "react";
import styled from "styled-components";

const Placeholder = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #484848;
  color: #484848;
  border-radius: 3px;
  margin: ${({ margin }) => margin || "0"};

  &:before {
    content: "";
    position: absolute;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      #606060 50%,
      transparent 100%
    );
    animation: load 1s infinite;

    @keyframes load {
      from {
        left: -100%;
      }
      to {
        left: 100%;
      }
    }
  }
`;

const SkeletonLine = ({ margin }) => {
  return <Placeholder margin={margin}>.</Placeholder>;
};

export default SkeletonLine;
