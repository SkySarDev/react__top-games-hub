import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameSingle } from "store/reducers/gamesReducer/actions";
import { useParams } from "react-router-dom";
import ContentHeader from "components/UI/ContentHeader";
import SingleGamePage from "components/pages/SingleGamePage";

const SingleGameContainer = () => {
  const { singleGame, bgImage, loading } = useSelector((state) => state.games);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchGameSingle(slug));
  }, [dispatch, slug]);

  return (
    <>
      {loading || !singleGame ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <SingleGamePage data={singleGame} />
        </div>
      )}
    </>
  );
};

export default SingleGameContainer;
