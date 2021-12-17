import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MainTitle } from "components/UI/styles";
import ContentGrid from "components/UI/ContentGrid";
import SkeletonCardsCreator from "components/UI/SkeletonCardsCreator";
import GameCardSkeleton from "components/UI/cards/GameCardSkeleton";

const Title = styled(MainTitle)`
  a {
    color: #e2e0d0;
    transition: color 0.3s;

    &:hover {
      color: #999999;
    }
  }
`;

const HomePageSection = ({
  isLoading,
  title,
  link,
  contentArr,
  Component,
  top,
  category,
}) => {
  return (
    <>
      <Title top={top} bottom={20}>
        <Link to={link}>{title}</Link>
      </Title>

      <ContentGrid>
        {isLoading ? (
          <SkeletonCardsCreator length={6} CardsComponent={GameCardSkeleton} />
        ) : (
          contentArr.map((contentItem) => (
            <Component
              key={contentItem.id}
              category={category}
              {...contentItem}
            />
          ))
        )}
      </ContentGrid>
    </>
  );
};

export default HomePageSection;

HomePageSection.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  contentArr: PropTypes.array,
  Component: PropTypes.func.isRequired,
  top: PropTypes.number,
  category: PropTypes.string,
};
