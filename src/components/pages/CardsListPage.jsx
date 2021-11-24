import React from "react";
import PropTypes from "prop-types";

import Card from "components/cards/Card";
import MainContentLayout from "components/UI/MainContentLayout";
import ContentGrid from "components/UI/ContentGrid";

const CardsListPage = ({ title, cardsList, queryParam }) => {
  return (
    <MainContentLayout title={title}>
      <ContentGrid>
        {cardsList.map((cardItem) => (
          <Card key={cardItem.id} {...cardItem} queryParam={queryParam} />
        ))}
      </ContentGrid>
    </MainContentLayout>
  );
};

CardsListPage.propTypes = {
  title: PropTypes.string.isRequired,
  cardsList: PropTypes.array.isRequired,
  queryParam: PropTypes.string.isRequired,
};

export default CardsListPage;
