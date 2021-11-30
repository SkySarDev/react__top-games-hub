import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_RELEASE_CALENDAR } from "utils/constants";

import ReleaseCalendarPage from "components/pages/ReleaseCalendarPage";
import {
  getDefaultDateRange,
  getDateRangeString,
  getRequestDateRange,
} from "utils/dateFuncs";

const ReleaseCalendarContainer = () => {
  const { data, loading } = useSelector((state) => state.mainContent);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        `${ROUTE_RELEASE_CALENDAR}/${requestDate.startDate},${requestDate.endDate}`
      )
    );
  }, [dispatch, slug]);

  const showChosenDate = (valueDate) => {
    const chosenDateQuery = getDateRangeString(valueDate, "calendar");

    navigate(`${ROUTE_RELEASE_CALENDAR}/${chosenDateQuery}`);
  };

  return (
    <ReleaseCalendarPage
      isLoading={loading}
      data={data.releaseCalendar}
      queryDate={queryDate}
      showChosenDate={showChosenDate}
    />
  );
};

export default ReleaseCalendarContainer;
