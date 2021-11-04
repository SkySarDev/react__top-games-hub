import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ROUTE_CALENDAR } from "utils/constants";

import MainContentLayout from "components/UI/MainContentLayout";
import SectionTitle from "components/UI/SectionTitle";
import GamesListGrid from "components/blocks/GamesListGrid";

const Container = styled.div`
  padding: 20px;
`;

const MonthsGrid = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 20px;

  a {
    transition: all 0.3s;
    color: #e2e0d0;

    &:hover {
      color: #999999;
    }
  }
`;

const MonthItem = styled.div`
  padding: 5px;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #59584c;
  border-radius: 3px;
`;

const GamesCount = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #999999;
  margin-bottom: 20px;
`;

const GamesCalendarPage = ({ name, games_count, results }) => {
  const monthsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <MainContentLayout title={name}>
      <Container>
        <MonthsGrid>
          {monthsList.map((month, i) => (
            <Link to={`${ROUTE_CALENDAR}/${i}`} key={month}>
              <MonthItem>{month}</MonthItem>
            </Link>
          ))}
        </MonthsGrid>
        <SectionTitle bottom={10}>Games count</SectionTitle>
        <GamesCount>{games_count}</GamesCount>
        <GamesListGrid gamesList={results} />
      </Container>
    </MainContentLayout>
  );
};

GamesCalendarPage.propTypes = {
  games_count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
};

export default GamesCalendarPage;
