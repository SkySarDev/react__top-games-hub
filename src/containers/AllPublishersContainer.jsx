import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_PUBLISHERS } from "utils/constants";

import CardsListContent from "views/content/CardsListContent";

const AllPublishersContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_PUBLISHERS));
  }, [dispatch]);

  return (
    <>
      {loading || !data.publishers ? (
        <CardsListContent isLoading />
      ) : (
        <CardsListContent
          isLoading={false}
          data={data.publishers}
          queryParam={"publishers"}
        />
      )}
    </>
  );
};

export default AllPublishersContainer;
