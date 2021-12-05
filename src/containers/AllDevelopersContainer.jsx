import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_DEVELOPERS } from "utils/constants";

import CardsListContent from "components/blocks/Content/CardsListContent";

const AllDevelopersContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_DEVELOPERS));
  }, [dispatch]);

  return (
    <>
      {loading || !data.developers ? (
        <CardsListContent isLoading />
      ) : (
        <CardsListContent
          isLoading={false}
          data={data.developers}
          queryParam={"developers"}
        />
      )}
    </>
  );
};

export default AllDevelopersContainer;
