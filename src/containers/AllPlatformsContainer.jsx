import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlatformsList } from "store/reducers/platformsReducer/actions";
import { ROUTE_PLATFORMS } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import CardsListPage from "components/pages/CardsListPage";

const AllPlatformsContainer = () => {
  const { list, bgImage, loading } = useSelector((state) => state.platforms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlatformsList());
  }, [dispatch]);

  return (
    <>
      {loading || !list.length ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <CardsListPage
            title={"Platforms"}
            cardsList={list}
            route={ROUTE_PLATFORMS}
          />
        </div>
      )}
    </>
  );
};

export default AllPlatformsContainer;
