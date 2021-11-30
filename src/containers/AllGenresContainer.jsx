import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GENRES } from "utils/constants";

import CardsListPage from "components/pages/CardsListPage";

const AllGenresContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GENRES));
  }, [dispatch]);

  return (
    <CardsListPage
      isLoading={loading}
      data={data.genres}
      queryParam={"genres"}
    />
  );
};

export default AllGenresContainer;
