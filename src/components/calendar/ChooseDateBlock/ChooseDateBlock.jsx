import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

import {
  getCalendarDateRangeString,
  getCalendarShortString,
  getDefaultDateRange,
  getRequestDateRange,
} from "utils/dateFuncs";

import DatePickerOverlay from "components/calendar/DatePickerOverlay";

import { BlankWrapper } from "components/UI/styles";
import "react-date-range/dist/styles.css";
import "./DateRangeCalendar.css";

const Container = styled.div`
  position: relative;
`;

const DisplayChosenDate = styled(BlankWrapper)`
  padding: 5px 10px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #999999;
  }
`;

const ChooseDateBlock = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [overlayActive, setOverlayActive] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    let requestDate;
    const dates = searchParams.get("dates");

    if (dates) {
      requestDate = getRequestDateRange(dates);
    } else {
      requestDate = getDefaultDateRange();
    }

    const { startDate, endDate } = requestDate;

    setDate([
      {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        key: "selection",
      },
    ]);
  }, [searchParams]);

  const showHideDatePicker = () => setOverlayActive((prevState) => !prevState);

  const changeDate = (item) => setDate([item.selection]);

  const applyFilter = () => {
    const chosenDateQuery = getCalendarDateRangeString(date[0]);

    setOverlayActive(false);
    searchParams.set("dates", chosenDateQuery);
    setSearchParams(searchParams);
  };

  return (
    <Container>
      <DisplayChosenDate onClick={showHideDatePicker}>
        Choose date: {getCalendarShortString(date[0])}
      </DisplayChosenDate>

      {overlayActive && (
        <DatePickerOverlay
          date={date}
          applyFilterHandler={applyFilter}
          changeDate={changeDate}
        />
      )}
    </Container>
  );
};

export default ChooseDateBlock;
