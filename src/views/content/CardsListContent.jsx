import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import useInfiniteScroll from "hooks/useInfiniteScroll";
import useFetchMoreData from "hooks/useFetchMoreData";

import Card from "components/UI/cards/Card";
import MainContentLayout from "components/UI/MainContentLayout";
import ContentGrid from "components/UI/ContentGrid";
import SkeletonCardsCreator from "components/UI/SkeletonCardsCreator";
import CardSkeleton from "components/UI/cards/CardSkeleton";

const CardsListContent = ({ firstLoading, loading, data }) => {
  const { pathname } = useLocation();
  const anchor = useRef(null);
  const getMoreData = useFetchMoreData(data?.nextPageQuery, pathname);

  useInfiniteScroll(anchor, () => {
    if (!firstLoading && !loading) {
      getMoreData();
    }
  });

  return (
    <MainContentLayout title={firstLoading ? "Loading..." : data.title}>
      <ContentGrid>
        {!!data?.content_array.length &&
          data.content_array.map((cardItem) => (
            <Card key={cardItem.id} {...cardItem} />
          ))}

        {(firstLoading || loading) && (
          <SkeletonCardsCreator length={15} CardsComponent={CardSkeleton} />
        )}
      </ContentGrid>
      {(!firstLoading || !loading) && <div ref={anchor} />}
    </MainContentLayout>
  );
};

CardsListContent.propTypes = {
  firstLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  data: PropTypes.object,
};

export default CardsListContent;
