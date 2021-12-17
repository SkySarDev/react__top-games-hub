import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_HOME } from "utils/constants";

import HomePageContent from "views/content/HomePageContent";

const HomePageContainer = () => {
  const { data, firstLoading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_HOME));
  }, [dispatch]);

  return (
    <>
      {firstLoading || data.category !== ROUTE_HOME ? (
        <HomePageContent isLoading />
      ) : (
        <HomePageContent isLoading={false} data={data} />
      )}
    </>
  );
};

export default HomePageContainer;
