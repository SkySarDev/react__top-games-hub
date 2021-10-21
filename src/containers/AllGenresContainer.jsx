import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContentHeader from "components/UI/ContentHeader";
import AllGenresPage from "components/pages/AllGenresPage";
import { fetchGenresList } from "store/reducers/genresReducer/actions";

const AllGenresContainer = () => {
  const { list, background, loading } = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenresList());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {list.length && (
        <div>
          <ContentHeader image={background} />
          <AllGenresPage genresList={list} />
        </div>
      )}
    </>
  );
};

export default AllGenresContainer;
