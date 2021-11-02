import React from "react";
import PropTypes from "prop-types";

import Card from "components/cards/Card";
import MainContentLayout from "components/UI/MainContentLayout";
import ContentGrid from "components/UI/ContentGrid";

const CardsListPage = ({ title, cardsList, route }) => {
  return (
    <MainContentLayout title={title}>
      <ContentGrid>
        {cardsList.map((cardItem) => (
          <Card key={cardItem.id} {...cardItem} route={route} />
        ))}
      </ContentGrid>
    </MainContentLayout>
  );
};

CardsListPage.propTypes = {
  title: PropTypes.string.isRequired,
  cardsList: PropTypes.array.isRequired,
  route: PropTypes.string.isRequired,
};

export default CardsListPage;
