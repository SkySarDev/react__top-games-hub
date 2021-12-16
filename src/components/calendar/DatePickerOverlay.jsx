import React from "react";
import { DateRange } from "react-date-range";
import styled from "styled-components";
import PropTypes from "prop-types";

const Overlay = styled.div`
  position: absolute;
  z-index: 100;
  top: 35px;
  left: 0;
`;

const Button = styled.button`
  margin-top: 5px;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #1b1b1b;
  text-align: center;
  background-color: white;
`;

const DatePickerOverlay = ({ date, applyFilterHandler, changeDate }) => {
  return (
    <Overlay>
      <DateRange
        onChange={changeDate}
        moveRangeOnFirstSelection={false}
        showDateDisplay={false}
        ranges={date}
      />
      <Button onClick={applyFilterHandler}>Show games</Button>
    </Overlay>
  );
};

export default DatePickerOverlay;

DatePickerOverlay.propTypes = {
  applyFilterHandler: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired,
  date: PropTypes.array.isRequired,
};
