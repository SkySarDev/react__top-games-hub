import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_CALENDAR } from "utils/constants";

import ContentHeader from "components/UI/ContentHeader";
import GamesCalendarPage from "components/pages/GamesCalendarPage";
import {
  getDefaultDateRange,
  getDateRangeString,
  getRequestDateRange,
} from "utils/dateFuncs";

const GamesCalendarContainer = () => {
  const { data, bgImage, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();
  const history = useHistory();
  const { slug } = useParams();
  const [queryDate, setQueryDate] = useState({});

  useEffect(() => {
    let requestDate;

    if (slug) {
      requestDate = getRequestDateRange(slug);
    } else {
      requestDate = getDefaultDateRange();
    }

    setQueryDate(requestDate);

    dispatch(
      fetchContent(
        ROUTE_CALENDAR,
        `${requestDate.startDate},${requestDate.endDate}`
      )
    );
  }, [dispatch, slug]);

  const showChosenDate = (valueDate) => {
    const chosenDateQuery = getDateRangeString(valueDate, "calendar");

    history.push(`${ROUTE_CALENDAR}/${chosenDateQuery}`);
  };

  return (
    <>
      {loading || !data.calendar ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ContentHeader image={bgImage} />
          <GamesCalendarPage
            {...data.calendar}
            queryDate={queryDate}
            showChosenDate={showChosenDate}
          />
        </div>
      )}
    </>
  );
};

export default GamesCalendarContainer;
