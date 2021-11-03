import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_DEVELOPERS } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import CardsListPage from "components/pages/CardsListPage";

const AllDevelopersContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_DEVELOPERS));
  }, [dispatch]);

  return (
    <>
      {loading || !data.developers ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <CardsListPage
            title={"Developers"}
            cardsList={data.developers}
            route={ROUTE_DEVELOPERS}
          />
        </div>
      )}
    </>
  );
};

export default AllDevelopersContainer;
