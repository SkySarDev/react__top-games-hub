import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GAMES } from "utils/constants";

import AllGamesPage from "components/pages/AllGamesPage";
import ContentHeader from "components/UI/ContentHeader";

const AllGamesContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GAMES));
  }, [dispatch]);

  return (
    <>
      {loading || !data.games ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <AllGamesPage gamesList={data.games} />
        </div>
      )}
    </>
  );
};

export default AllGamesContainer;
