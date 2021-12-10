import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";
import ChooseDateBlock from "components/calendar/ChooseDateBlock";
import GamesListBlockHeader from "components/blocks/GamesListBlockHeader";
import GamesListBlockBody from "components/blocks/GamesListBlockBody";

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

const GamesListContent = ({ isLoading, data, queryDate, showChosenDate }) => {
  return (
    <MainContentLayout title={isLoading ? "Loading..." : data.title}>
      <Container>
        {queryDate && (
          <DatePickerGrid>
            <ChooseDateBlock
              dateObj={queryDate}
              showChosenDate={showChosenDate}
            />
          </DatePickerGrid>
        )}

        <GamesListBlockHeader
          isLoading={isLoading}
          gamesCount={data?.games_count}
        />

        <GamesListBlockBody isLoading={isLoading} results={data?.results} />
      </Container>
    </MainContentLayout>
  );
};

GamesListContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  queryDate: PropTypes.object,
  showChosenDate: PropTypes.func,
};

export default GamesListContent;
