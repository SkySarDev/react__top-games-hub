import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_CALENDAR } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import GamesCalendarPage from "components/pages/GamesCalendarPage";

const GamesCalendarContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    const date = slug ? slug : "";

    dispatch(fetchContent(ROUTE_CALENDAR, date));
  }, [dispatch, slug]);

  return (
    <>
      {loading || !data.calendar ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <GamesCalendarPage {...data.calendar} />
        </div>
      )}
    </>
  );
};

export default GamesCalendarContainer;
