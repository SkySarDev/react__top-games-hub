import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_DEVELOPERS } from "utils/constants";

import CardsListContent from "views/content/CardsListContent";

const AllDevelopersContainer = () => {
  const { data, firstLoading, loading } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_DEVELOPERS));
  }, [dispatch]);

  return (
    <>
      {firstLoading || !data.developers ? (
        <CardsListContent firstLoading />
      ) : (
        <CardsListContent
          firstLoading={false}
          loading={loading}
          data={data}
          queryParam={"developers"}
        />
      )}
    </>
  );
};

export default AllDevelopersContainer;
