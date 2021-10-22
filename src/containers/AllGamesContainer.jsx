import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AllGamesPage from "components/pages/AllGamesPage";
import { fetchGames } from "store/reducers/gamesReducer/actions";

const AllGamesContainer = () => {
  const { list, loading } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <>{list.length && <AllGamesPage gamesList={list} />}</>;
};

export default AllGamesContainer;
