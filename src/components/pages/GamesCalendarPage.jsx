import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";
import GamesListBlock from "components/blocks/GamesListBlock";
import ChooseDateBlock from "components/blocks/Calendar/ChooseDateBlock";

const Container = styled.div`
  padding: 20px;
`;

const DatePickerGrid = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 18px;
  margin-bottom: 20px;
`;

const GamesCalendarPage = ({
  queryDate,
  name,
  games_count,
  results,
  showChosenDate,
}) => {
  return (
    <MainContentLayout title={name}>
      <Container>
        <DatePickerGrid>
          <ChooseDateBlock
            dateObj={queryDate}
            showChosenDate={showChosenDate}
          />
        </DatePickerGrid>

        <GamesListBlock gamesList={results} games_count={games_count} />
      </Container>
    </MainContentLayout>
  );
};

GamesCalendarPage.propTypes = {
  queryDate: PropTypes.object,
  name: PropTypes.string.isRequired,
  games_count: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired,
  showChosenDate: PropTypes.func.isRequired,
};

export default GamesCalendarPage;
