import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GameCardSkeleton from "components/cards/GameCardSkeleton";
import GameCard from "components/cards/GameCard";
import SkeletonCardsCreator from "components/UI/SkeletonCardsCreator";
import useInfiniteScroll from "hooks/useInfiniteScroll";

const GamesListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const GamesListBlockBody = ({
  firstLoading,
  loading,
  gamesList,
  gamesCount,
  getMoreData,
}) => {
  const anchor = useRef(null);
  useInfiniteScroll(anchor, fetchMoreData);

  function fetchMoreData() {
    if (gamesList && gamesList.length < gamesCount) {
      getMoreData();
    }
  }

  return (
    <>
      <GamesListGrid>
        {!!gamesList?.length &&
          gamesList.map((game) => <GameCard key={game.id} {...game} />)}

        {(firstLoading || loading) && (
          <SkeletonCardsCreator length={15} CardsComponent={GameCardSkeleton} />
        )}
      </GamesListGrid>

      {(!firstLoading || !loading) && <div ref={anchor} />}
    </>
  );
};

GamesListBlockBody.propTypes = {
  firstLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  gamesList: PropTypes.array,
  gamesCount: PropTypes.number,
  getMoreData: PropTypes.func,
};

export default GamesListBlockBody;
