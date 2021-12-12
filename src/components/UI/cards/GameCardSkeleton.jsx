import React from "react";
import styled from "styled-components";

import SkeletonLine from "components/UI/SkeletonLine";
import CardSpinner from "components/UI/cards/CardSpinner";

const Wrapper = styled.div`
  position: relative;
  height: 250px;
  border: 1px solid #59584c;
  background-color: #1b1b1b;
  border-radius: 5px;
`;

const Body = styled.div`
  display: grid;
  height: 100%;
  row-gap: 15px;
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
  height: 20px;
`;

const GameCardSkeleton = () => {
  return (
    <Wrapper>
      <CardSpinner />
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
