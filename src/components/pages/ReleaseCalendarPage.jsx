import React, { useEffect, useState } from "react";
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

const ReleaseCalendarPage = ({
  isLoading,
  queryDate,
  data,
  showChosenDate,
}) => {
  const [content, setContent] = useState({
    noContent: true,
    title: "Loading...",
  });

  useEffect(() => {
    if (data) {
      setContent(data);
    }
  }, [data]);

  return (
    <MainContentLayout title={content.title}>
      <Container>
        {isLoading || content.noContent ? (
          <div>Loading...</div>
        ) : (
          <>
            <DatePickerGrid>
              <ChooseDateBlock
                dateObj={queryDate}
                showChosenDate={showChosenDate}
              />
            </DatePickerGrid>
            <GamesListBlock {...content} />
          </>
        )}
      </Container>
    </MainContentLayout>
  );
};

ReleaseCalendarPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  queryDate: PropTypes.object,
  data: PropTypes.object,
  // title: PropTypes.string.isRequired,
  // games_count: PropTypes.number.isRequired,
  // results: PropTypes.array.isRequired,
  showChosenDate: PropTypes.func.isRequired,
};

export default ReleaseCalendarPage;
