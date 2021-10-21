import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContentHeader from "components/UI/ContentHeader";
import AllGamesPage from "components/pages/AllGamesPage";
import { fetchGames } from "store/reducers/gamesReducer/actions";

const AllGamesContainer = () => {
  const { list, background, loading } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {list.length && (
        <div>
          <ContentHeader image={background} />
          <AllGamesPage gamesList={list} />
        </div>
      )}
    </>
  );
};

export default AllGamesContainer;
