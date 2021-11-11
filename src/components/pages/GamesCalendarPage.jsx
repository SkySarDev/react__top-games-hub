import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";
import SectionTitle from "components/UI/SectionTitle";
import GamesListGrid from "components/blocks/GamesListGrid";
import ChooseDateBlock from "components/blocks/Calendar/ChooseDateBlock";

const Container = styled.div`
  padding: 20px;
`;

const TitleGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, auto);
  margin-bottom: 20px;
`;

const DatePickerGrid = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 18px;
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
        <TitleGrid>
          <SectionTitle>
            Games count: <span>{games_count}</span>
          </SectionTitle>
          <DatePickerGrid>
            Choose date:
            <ChooseDateBlock
              dateObj={queryDate}
              showChosenDate={showChosenDate}
            />
          </DatePickerGrid>
        </TitleGrid>
        <GamesListGrid gamesList={results} />
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
