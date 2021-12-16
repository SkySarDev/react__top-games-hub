import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";
import ChooseDateBlock from "components/calendar/ChooseDateBlock";
import GamesListBlockHeader from "components/blocks/GamesListBlockHeader";
import GamesListBlockBody from "components/blocks/GamesListBlockBody";

const DatePickerGrid = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 18px;
  margin-bottom: 20px;
`;

const GamesListContent = ({ firstLoading, loading, data, showDatePicker }) => {
  return (
    <MainContentLayout title={firstLoading ? "Loading..." : data.title}>
      {showDatePicker && (
        <DatePickerGrid>
          <ChooseDateBlock />
        </DatePickerGrid>
      )}

      <GamesListBlockHeader
        firstLoading={firstLoading}
        gamesCount={data?.games_count}
      />

      <GamesListBlockBody
        firstLoading={firstLoading}
        gamesList={data?.content_array}
        loading={loading}
        nextPageQuery={data?.nextPageQuery}
      />
    </MainContentLayout>
  );
};

GamesListContent.propTypes = {
  firstLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  data: PropTypes.object,
  showDatePicker: PropTypes.bool,
};

export default GamesListContent;
