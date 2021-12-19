import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import useInfiniteScroll from "hooks/useInfiniteScroll";
import useFetchMoreData from "hooks/useFetchMoreData";

import GameCardSkeleton from "components/UI/cards/GameCardSkeleton";
import GameCard from "components/UI/cards/GameCard";
import SkeletonCardsCreator from "components/UI/SkeletonCardsCreator";
import ContentGrid from "components/UI/ContentGrid";

const Notification = styled.p`
  margin: 20px 0;
  font-size: 24px;
  text-align: center;
`;

const GamesListBlockBody = ({
  firstLoading,
  loading,
  gamesList,
  nextPageQuery,
}) => {
  const { pathname } = useLocation();
  const anchor = useRef(null);
  const getMoreData = useFetchMoreData(nextPageQuery, pathname);

  useInfiniteScroll(anchor, () => {
    if (!firstLoading && !loading) {
      getMoreData();
    }
  });

  return (
    <>
      <ContentGrid>
        {gamesList &&
          gamesList.map((game) => <GameCard key={game.id} {...game} />)}

        {(firstLoading || loading) && (
          <SkeletonCardsCreator length={15} CardsComponent={GameCardSkeleton} />
        )}
      </ContentGrid>

      {(!firstLoading || !loading) && (
        <>
          {gamesList?.length ? (
            <div ref={anchor} />
          ) : (
            <Notification>Nothing found</Notification>
          )}
        </>
      )}
    </>
  );
};

GamesListBlockBody.propTypes = {
  firstLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  gamesList: PropTypes.array,
};

export default GamesListBlockBody;
