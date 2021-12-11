import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  fetchContent,
  fetchMoreData,
} from "store/reducers/mainContentReducer/actions";
import { ROUTE_GAMES } from "utils/constants";

import GamesListContent from "views/content/GamesListContent";

const AllGamesContainer = () => {
  const { data, firstLoading, loading } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GAMES + search));
  }, [dispatch, search]);

  const getMoreData = () => {
    if (data?.nextPageQuery) {
      dispatch(fetchMoreData(`${ROUTE_GAMES}-more?${data.nextPageQuery}`));
    }
  };

  return (
    <>
      {firstLoading || !data.games ? (
        <GamesListContent firstLoading />
      ) : (
        <GamesListContent
          firstLoading={false}
          loading={loading}
          data={data}
          getMoreData={getMoreData}
        />
      )}
    </>
  );
};

export default AllGamesContainer;
