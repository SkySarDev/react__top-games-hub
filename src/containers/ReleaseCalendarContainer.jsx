import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import url from "url";

import { fetchContent } from "store/reducers/mainContentReducer/actions";
import { ROUTE_RELEASE_CALENDAR } from "utils/constants";

import { getDefaultDateRange } from "utils/dateFuncs";
import GamesListContent from "views/content/GamesListContent";
import ErrorNotification from "views/content/ErrorNotification";

const ReleaseCalendarContainer = () => {
  const { data, firstLoading, loading, error } = useSelector(
    (state) => state.mainContent
  );
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    let defaultDate = "";
    const { dates } = url.parse(search, true).query;

    if (!dates) {
      const { startDate, endDate } = getDefaultDateRange();
      const symbol = search ? "&" : "?";

      defaultDate = `${symbol}dates=${startDate},${endDate}`;
    }

    dispatch(fetchContent(`${ROUTE_RELEASE_CALENDAR}${search}${defaultDate}`));
  }, [dispatch, search]);

  return (
    <>
      {error ? (
        <ErrorNotification error={error} />
      ) : (
        <>
          {firstLoading || data.category !== ROUTE_RELEASE_CALENDAR ? (
            <GamesListContent firstLoading showDatePicker />
          ) : (
            <GamesListContent
              firstLoading={false}
              loading={loading}
              data={data}
              showDatePicker
            />
          )}
        </>
      )}
    </>
  );
};

export default ReleaseCalendarContainer;
