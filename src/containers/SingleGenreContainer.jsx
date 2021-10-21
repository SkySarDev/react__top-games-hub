import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGenreSingle } from "store/reducers/genresReducer/actions";
import ContentHeader from "components/UI/ContentHeader";
import SingleGenrePage from "components/pages/SingleGenrePage";

const SingleGenreContainer = () => {
  const { singleGenre, loading } = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchGenreSingle(slug));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {singleGenre && (
        <div>
          <ContentHeader image={singleGenre.image_background} />
          <SingleGenrePage data={singleGenre} />
        </div>
      )}
    </>
  );
};

export default SingleGenreContainer;
