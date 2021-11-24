import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GAMES } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import GamesListContent from "components/blocks/Content/GamesListContent";

const AllGamesContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GAMES + search));
  }, [dispatch, search]);

  return (
    <>
      {loading || !data.games ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          {/*<AllGamesPage gamesList={data.games} />*/}
          <GamesListContent {...data.games} />
        </div>
      )}
    </>
  );
};

export default AllGamesContainer;
