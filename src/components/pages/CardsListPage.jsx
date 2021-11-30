import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Card from "components/cards/Card";
import MainContentLayout from "components/UI/MainContentLayout";
import ContentGrid from "components/UI/ContentGrid";

const CardsListPage = ({ isLoading, queryParam, data }) => {
  const [content, setContent] = useState({ noContent: true, title: "Loading" });

  useEffect(() => {
    if (data) {
      setContent(data);
    }
  }, [data]);

  return (
    <MainContentLayout title={content.title}>
      <ContentGrid>
        {isLoading || content.noContent ? (
          <div>Loading...</div>
        ) : (
          <>
            {content.results.map((cardItem) => (
              <Card key={cardItem.id} {...cardItem} queryParam={queryParam} />
            ))}
          </>
        )}
      </ContentGrid>
    </MainContentLayout>
  );
};

CardsListPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  queryParam: PropTypes.string.isRequired,
  data: PropTypes.object,
};

export default CardsListPage;
