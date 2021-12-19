import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GAMES } from "utils/constants";

import GamesListContent from "views/content/GamesListContent";
import ErrorNotification from "views/content/ErrorNotification";

const AllGamesContainer = () => {
  const { pathname } = useLocation();
  const { data, firstLoading, loading, error } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GAMES + search));
  }, [dispatch, search]);

  return (
    <>
      {error ? (
        <ErrorNotification error={error} />
      ) : (
        <>
          {firstLoading || data.category !== pathname ? (
            <GamesListContent firstLoading />
          ) : (
            <GamesListContent
              firstLoading={false}
              loading={loading}
              data={data}
            />
          )}
        </>
      )}
    </>
  );
};

export default AllGamesContainer;
