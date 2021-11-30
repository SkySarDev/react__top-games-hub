import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_PLATFORMS } from "utils/constants";

import CardsListPage from "components/pages/CardsListPage";

const AllPlatformsContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_PLATFORMS));
  }, [dispatch]);

  return (
    <CardsListPage
      isLoading={loading}
      data={data.platforms}
      queryParam={"platforms"}
    />
  );
};

export default AllPlatformsContainer;
