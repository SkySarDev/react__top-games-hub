import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_PUBLISHERS } from "utils/constants";

import CardsListContent from "views/content/CardsListContent";

const AllPublishersContainer = () => {
  const { data, firstLoading, loading } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_PUBLISHERS));
  }, [dispatch]);

  return (
    <>
      {firstLoading || !data.publishers ? (
        <CardsListContent firstLoading />
      ) : (
        <CardsListContent
          firstLoading={false}
          loading={loading}
          data={data}
          queryParam={"publishers"}
        />
      )}
    </>
  );
};

export default AllPublishersContainer;
