import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DateRange } from "react-date-range";

import { getDateRangeString } from "utils/dateFuncs";

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

const DatePickerOverlay = styled.div`
  position: absolute;
  z-index: 100;
  top: 35px;
  left: 0;
  display: none;

  &.active {
    display: block;
  }
`;

const ShowButton = styled.button`
  margin-top: 5px;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #1b1b1b;
  text-align: center;
  background-color: white;
`;

const ChooseDateBlock = ({ dateObj, showChosenDate }) => {
  const [date, setDate] = useState([]);
  const [overlayActive, setOverlayActive] = useState(false);

  useEffect(() => {
    setDate([
      {
        startDate: new Date(dateObj.startDate),
        endDate: new Date(dateObj.endDate),
        key: "selection",
      },
    ]);
  }, [dateObj]);

  const showDatePicker = () => {
    setOverlayActive((prevState) => !prevState);
  };

  const applyFilterHandler = () => {
    setOverlayActive(false);
    showChosenDate(date[0]);
  };

  return (
    <>
      {date.length && (
        <Container>
          <DisplayChosenDate onClick={showDatePicker}>
            Choose date: {getDateRangeString(date[0], "short")}
          </DisplayChosenDate>

          <DatePickerOverlay className={`${overlayActive ? " active" : ""}`}>
            <DateRange
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              showDateDisplay={false}
              ranges={date}
            />
            <ShowButton onClick={applyFilterHandler}>Show games</ShowButton>
          </DatePickerOverlay>
        </Container>
      )}
    </>
  );
};

export default ChooseDateBlock;

ChooseDateBlock.propTypes = {
  dateObj: PropTypes.object.isRequired,
  showChosenDate: PropTypes.func.isRequired,
};
