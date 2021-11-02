import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGenresList } from "store/reducers/genresReducer/actions";
import { ROUTE_GENRES } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import CardsListPage from "components/pages/CardsListPage";

const AllGenresContainer = () => {
  const { list, bgImage, loading } = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenresList());
  }, [dispatch]);

  return (
    <>
      {loading || !list.length ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <CardsListPage
            title={"Genres"}
            cardsList={list}
            route={ROUTE_GENRES}
          />
        </div>
      )}
    </>
  );
};

export default AllGenresContainer;
