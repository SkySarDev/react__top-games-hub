import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GAMES } from "utils/constants";

import SingleGameContent from "views/content/SingleGameContent";
import ErrorNotification from "views/content/ErrorNotification";

const SingleGameContainer = () => {
  const { data, firstLoading, error } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchContent(`${ROUTE_GAMES}/${slug}`));
  }, [dispatch, slug]);

  return (
    <>
      {error ? (
        <ErrorNotification error={error} />
      ) : (
        <>
          {firstLoading || !data.game ? (
            <SingleGameContent isLoading />
          ) : (
            <SingleGameContent isLoading={false} data={data.game} />
          )}
        </>
      )}
    </>
  );
};

export default SingleGameContainer;
