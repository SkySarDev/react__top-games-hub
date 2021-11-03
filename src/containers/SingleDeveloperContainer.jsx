import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_DEVELOPERS } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import SingleContentPage from "components/pages/SingleContentPage";

const SingleDeveloperContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_DEVELOPERS, slug));
  }, [dispatch, slug]);

  return (
    <>
      {loading || !data.developer ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <SingleContentPage {...data.developer} />
        </div>
      )}
    </>
  );
};

export default SingleDeveloperContainer;
