import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GENRES } from "utils/constants";

import CardsListContent from "views/content/CardsListContent";

const AllGenresContainer = () => {
  const { data, firstLoading, loading } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GENRES));
  }, [dispatch]);

  return (
    <>
      {firstLoading || !data.genres ? (
        <CardsListContent firstLoading />
      ) : (
        <CardsListContent
          firstLoading={false}
          loading={loading}
          data={data}
          queryParam={"genres"}
        />
      )}
    </>
  );
};

export default AllGenresContainer;
