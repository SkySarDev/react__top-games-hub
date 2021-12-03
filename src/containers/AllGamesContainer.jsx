import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GAMES } from "utils/constants";

import GamesListContent from "components/blocks/Content/GamesListContent";

const AllGamesContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GAMES + search));
  }, [dispatch, search]);

  return (
    <>
      {loading || !data.games ? (
        <GamesListContent isLoading />
      ) : (
        <GamesListContent isLoading={false} data={data.games} />
      )}
    </>
  );
};

export default AllGamesContainer;
