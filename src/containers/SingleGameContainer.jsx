import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GAMES } from "utils/constants";

import SingleGameContent from "components/blocks/Content/SingleGameContent";

const SingleGameContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchContent(`${ROUTE_GAMES}/${slug}`));
  }, [dispatch, slug]);

  return (
    <>
      {loading || !data.game ? (
        <SingleGameContent isLoading />
      ) : (
        <SingleGameContent isLoading={false} data={data.game} />
      )}
    </>
  );
};

export default SingleGameContainer;
