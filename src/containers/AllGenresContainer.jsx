import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GENRES } from "utils/constants";

import CardsListContent from "components/blocks/Content/CardsListContent";

const AllGenresContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GENRES));
  }, [dispatch]);

  return (
    <>
      {loading || !data.genres ? (
        <CardsListContent isLoading />
      ) : (
        <CardsListContent
          isLoading={false}
          data={data.genres}
          queryParam={"genres"}
        />
      )}
    </>
  );
};

export default AllGenresContainer;
