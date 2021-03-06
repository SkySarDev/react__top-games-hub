import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";

import CardsListContent from "views/content/CardsListContent";
import ErrorNotification from "views/content/ErrorNotification";

const CategoriesContainer = () => {
  const { pathname } = useLocation();
  const { data, firstLoading, loading, error } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent(pathname));
  }, [pathname, dispatch]);

  return (
    <>
      {error ? (
        <ErrorNotification error={error} />
      ) : (
        <>
          {firstLoading || data.category !== pathname ? (
            <CardsListContent firstLoading />
          ) : (
            <CardsListContent
              firstLoading={false}
              loading={loading}
              data={data}
            />
          )}
        </>
      )}
    </>
  );
};

export default CategoriesContainer;
