import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";

import CardsListContent from "views/content/CardsListContent";

const CategoriesContainer = () => {
  const { pathname } = useLocation();
  const { data, firstLoading, loading } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(pathname));
  }, [pathname, dispatch]);

  return (
    <>
      {firstLoading || data.category !== pathname ? (
        <CardsListContent firstLoading />
      ) : (
        <CardsListContent firstLoading={false} loading={loading} data={data} />
      )}
    </>
  );
};

export default CategoriesContainer;
