import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SkeletonLine from "components/UI/SkeletonLine";

const Wrapper = styled.div`
  height: ${({ height }) => height || "250"}px;
  border: 1px solid #59584c;
  background-color: #1b1b1b;
  border-radius: 5px;
`;

const Body = styled.div`
  display: grid;
  height: 100%;
  row-gap: 10px;
  padding: 15px;
  align-content: end;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  column-gap: 15px;
  justify-content: space-between;
`;

const GameCardSkeleton = ({ height }) => {
  return (
    <Wrapper height={height}>
      <Body>
        <Title>
          <SkeletonLine />
        </Title>
        <InfoRow>
          <SkeletonLine />
          <SkeletonLine />
        </InfoRow>
      </Body>
    </Wrapper>
  );
};

export default GameCardSkeleton;

GameCardSkeleton.propTypes = {
  height: PropTypes.number,
};
