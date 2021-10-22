import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AllGenresPage from "components/pages/AllGenresPage";
import { fetchGenresList } from "store/reducers/genresReducer/actions";
import ContentHeader from "components/UI/ContentHeader";

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
          <AllGenresPage genresList={list} />
        </div>
      )}
    </>
  );
};

export default AllGenresContainer;
