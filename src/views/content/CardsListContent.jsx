import React from "react";
import PropTypes from "prop-types";

import Card from "components/cards/Card";
import MainContentLayout from "components/UI/MainContentLayout";
import ContentGrid from "components/UI/ContentGrid";
import CardSkeleton from "components/cards/CardSkeleton";

const CardsListContent = ({ isLoading, queryParam, data }) => {
  return (
    <MainContentLayout title={isLoading ? "Loading..." : data.title}>
      <ContentGrid>
        {isLoading
          ? Array.from({ length: 15 }, (_, i) => <CardSkeleton key={i} />)
          : data.results.map((cardItem) => (
              <Card key={cardItem.id} {...cardItem} queryParam={queryParam} />
            ))}
      </ContentGrid>
    </MainContentLayout>
  );
};

CardsListContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  queryParam: PropTypes.string,
  data: PropTypes.object,
};

export default CardsListContent;
