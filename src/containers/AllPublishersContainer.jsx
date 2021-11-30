import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_PUBLISHERS } from "utils/constants";

import CardsListPage from "components/pages/CardsListPage";

const AllPublishersContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_PUBLISHERS));
  }, [dispatch]);

  return (
    <CardsListPage
      isLoading={loading}
      data={data.publishers}
      queryParam={"publishers"}
    />
  );
};

export default AllPublishersContainer;
