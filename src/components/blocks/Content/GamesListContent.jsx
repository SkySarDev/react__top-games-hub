import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";
import SectionTitle from "components/UI/SectionTitle";
import GamesFilterBlock from "components/blocks/GamesFilterBlock";
import GameCard from "components/cards/GameCard";
import GameCardSkeleton from "components/cards/GameCardSkeleton";
import SkeletonLine from "components/UI/SkeletonLine";
import ChooseDateBlock from "components/blocks/Calendar/ChooseDateBlock";

const Container = styled.div`
  padding: 20px;
`;

const GamesListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const DatePickerGrid = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 18px;
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, auto);
  margin-bottom: 20px;
`;

const GamesCountTitle = styled.div`
  display: grid;
  grid-template-columns: auto minmax(100px, auto);
  align-items: center;
  column-gap: 10px;
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

        <TitleWrapper>
          <SectionTitle>
            <GamesCountTitle>
              Games count:
              <span>
                {isLoading ? (
                  <SkeletonLine />
                ) : (
                  data.games_count.toLocaleString("en-US")
                )}
              </span>
            </GamesCountTitle>
          </SectionTitle>
          <GamesFilterBlock />
        </TitleWrapper>

        <GamesListGrid>
          {isLoading
            ? Array.from({ length: 15 }, (_, i) => <GameCardSkeleton key={i} />)
            : data.results.map((game) => <GameCard key={game.id} {...game} />)}
        </GamesListGrid>
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
