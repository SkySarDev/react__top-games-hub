import React from "react";
import styled from "styled-components";

import SkeletonLine from "components/UI/SkeletonLine";
import CardSpinner from "components/UI/cards/CardSpinner";

const Wrapper = styled.div`
  position: relative;
  height: 220px;
  border: 1px solid #59584c;
  background-color: #1b1b1b;
  border-radius: 5px;
`;

const Body = styled.div`
  display: grid;
  align-content: end;
  height: 100%;
  padding: 15px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  display: grid;
  justify-content: end;
  grid-template-columns: 150px;
`;

const CardSkeleton = () => {
  return (
    <Wrapper>
      <CardSpinner />
      <Body>
        <Title>
          <SkeletonLine />
        </Title>
        <InfoRow>
          <SkeletonLine />
        </InfoRow>
      </Body>
    </Wrapper>
  );
};

export default CardSkeleton;
