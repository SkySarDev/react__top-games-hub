import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGamesList } from "store/reducers/gamesReducer/actions";

import AllGamesPage from "components/pages/AllGamesPage";
import ContentHeader from "components/UI/ContentHeader";

const AllGamesContainer = () => {
  const { list, bgImage, loading } = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesList());
  }, [dispatch]);

  return (
    <>
      {loading || !list.length ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <AllGamesPage gamesList={list} />
        </div>
      )}
    </>
  );
};

export default AllGamesContainer;
