import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchGenreSingle } from "store/reducers/genresReducer/actions";

import SingleGenrePage from "components/pages/SingleGenrePage";
import ContentHeader from "components/UI/ContentHeader";

const SingleGenreContainer = () => {
  const { singleGenre, bgImage, loading } = useSelector(
    (state) => state.genres
  );
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchGenreSingle(slug));
  }, [dispatch, slug]);

  return (
    <>
      {loading || !singleGenre ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <SingleGenrePage data={singleGenre} />
        </div>
      )}
    </>
  );
};

export default SingleGenreContainer;
