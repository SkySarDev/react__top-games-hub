import React from "react";
import styled from "styled-components";

import GameInfoParagraph from "./GameInfoParagraph";
import SkeletonLine from "components/UI/SkeletonLine";
import SectionTitle from "components/UI/SectionTitle";

const Wrapper = styled.div`
  width: 300px;
`;

const GameInfoBlockSkeleton = () => {
  return (
    <Wrapper>
      <SectionTitle bottom={10}>Game info</SectionTitle>

      <GameInfoParagraph title={"Release date"}>
        <SkeletonLine />
      </GameInfoParagraph>

      <GameInfoParagraph title={"Website"}>
        <SkeletonLine />
      </GameInfoParagraph>

      <GameInfoParagraph title={"Developers"}>
        <SkeletonLine />
      </GameInfoParagraph>

      <GameInfoParagraph title={"Publishers"}>
        <SkeletonLine />
      </GameInfoParagraph>

      <GameInfoParagraph title={"Platforms"}>
        <SkeletonLine />
      </GameInfoParagraph>
    </Wrapper>
  );
};

export default GameInfoBlockSkeleton;
