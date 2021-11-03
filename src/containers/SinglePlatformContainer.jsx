import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_PLATFORMS } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import SingleContentPage from "components/pages/SingleContentPage";

const SinglePlatformContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_PLATFORMS, slug));
  }, [dispatch, slug]);

  return (
    <>
      {loading || !data.platform ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <SingleContentPage {...data.platform} />
        </div>
      )}
    </>
  );
};

export default SinglePlatformContainer;
