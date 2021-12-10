import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_PLATFORMS } from "utils/constants";

import CardsListContent from "views/content/CardsListContent";

const AllPlatformsContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_PLATFORMS));
  }, [dispatch]);

  return (
    <>
      {loading || !data.platforms ? (
        <CardsListContent isLoading />
      ) : (
        <CardsListContent
          isLoading={false}
          data={data.platforms}
          queryParam={"platforms"}
        />
      )}
    </>
  );
};

export default AllPlatformsContainer;
