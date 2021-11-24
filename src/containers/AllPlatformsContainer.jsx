import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_PLATFORMS } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import CardsListPage from "components/pages/CardsListPage";

const AllPlatformsContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_PLATFORMS));
  }, [dispatch]);

  return (
    <>
      {loading || !data.platforms ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <CardsListPage
            title={"Platforms"}
            cardsList={data.platforms}
            queryParam={"platforms"}
          />
        </div>
      )}
    </>
  );
};

export default AllPlatformsContainer;
