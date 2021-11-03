import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GAMES } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import SingleGamePage from "components/pages/SingleGamePage";

const SingleGameContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GAMES, slug));
  }, [dispatch, slug]);

  return (
    <>
      {loading || !data.game ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <SingleGamePage gameData={data.game} />
        </div>
      )}
    </>
  );
};

export default SingleGameContainer;
