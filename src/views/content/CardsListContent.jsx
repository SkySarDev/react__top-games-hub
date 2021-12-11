import React from "react";
import PropTypes from "prop-types";

import Card from "components/cards/Card";
import MainContentLayout from "components/UI/MainContentLayout";
import ContentGrid from "components/UI/ContentGrid";
import CardSkeleton from "components/cards/CardSkeleton";

const CardsListContent = ({ firstLoading, queryParam, data }) => {
  return (
    <MainContentLayout title={firstLoading ? "Loading..." : data.title}>
      <ContentGrid>
        {firstLoading
          ? Array.from({ length: 15 }, (_, i) => <CardSkeleton key={i} />)
          : data.content_array.map((cardItem) => (
              <Card key={cardItem.id} {...cardItem} queryParam={queryParam} />
            ))}
      </ContentGrid>
    </MainContentLayout>
  );
};

CardsListContent.propTypes = {
  firstLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  queryParam: PropTypes.string,
  data: PropTypes.object,
};

export default CardsListContent;
