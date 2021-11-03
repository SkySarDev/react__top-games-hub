import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_GENRES } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import CardsListPage from "components/pages/CardsListPage";

const AllGenresContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(ROUTE_GENRES));
  }, [dispatch]);

  return (
    <>
      {loading || !data.genres ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <CardsListPage
            title={"Genres"}
            cardsList={data.genres}
            route={ROUTE_GENRES}
          />
        </div>
      )}
    </>
  );
};

export default AllGenresContainer;
