import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  fetchContent,
  fetchMoreData,
} from "store/reducers/mainContentReducer/actions";
import { ROUTE_RELEASE_CALENDAR } from "utils/constants";

import {
  getDefaultDateRange,
  getDateRangeString,
  getRequestDateRange,
} from "utils/dateFuncs";
import GamesListContent from "views/content/GamesListContent";

const ReleaseCalendarContainer = () => {
  const { data, firstLoading, loading } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const { search } = useLocation();
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
        `${ROUTE_RELEASE_CALENDAR}/${requestDate.startDate},${requestDate.endDate}${search}`
      )
    );
  }, [dispatch, slug, search]);

  const getMoreData = (arrLength) => {
    const dataSize = `${search ? "&" : "?"}data_size=${arrLength}`;

    dispatch(
      fetchMoreData(
        `${ROUTE_RELEASE_CALENDAR}-more-data/${queryDate.startDate},${queryDate.endDate}${search}${dataSize}`
      )
    );
  };

  const showChosenDate = (valueDate) => {
    const chosenDateQuery = getDateRangeString(valueDate, "calendar");

    navigate(`${ROUTE_RELEASE_CALENDAR}/${chosenDateQuery}${search}`);
  };

  return (
    <>
      {firstLoading || !data.releaseCalendar ? (
        <GamesListContent
          firstLoading
          queryDate={queryDate}
          showChosenDate={showChosenDate}
        />
      ) : (
        <GamesListContent
          firstLoading={false}
          loading={loading}
          queryDate={queryDate}
          showChosenDate={showChosenDate}
          data={data}
          getMoreData={getMoreData}
        />
      )}
    </>
  );
};

export default ReleaseCalendarContainer;
