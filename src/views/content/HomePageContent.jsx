import React from "react";
import PropTypes from "prop-types";

import * as routes from "utils/constants";

import MainContentLayout from "components/UI/MainContentLayout";
import HomePageSection from "components/blocks/HomePageSection";
import GameCard from "components/UI/cards/GameCard";
import Card from "components/UI/cards/Card";

const HomePageContent = ({ isLoading, data }) => {
  return (
    <MainContentLayout title={isLoading ? "Loading..." : data.title}>
      <HomePageSection
        isLoading={isLoading}
        Component={GameCard}
        title={"New releases"}
        link={routes.ROUTE_RELEASE_CALENDAR}
        contentArr={data?.content.newReleases}
      />

      <HomePageSection
        isLoading={isLoading}
        Component={Card}
        title={"Popular genres"}
        link={routes.ROUTE_GENRES}
        contentArr={data?.content.popularGenres}
        top={25}
        category={"genres"}
      />

      <HomePageSection
        isLoading={isLoading}
        Component={GameCard}
        title={"All games"}
        link={routes.ROUTE_GAMES}
        contentArr={data?.content.allGames}
        top={25}
      />

      <HomePageSection
        isLoading={isLoading}
        Component={Card}
        title={"Tags"}
        link={routes.ROUTE_TAGS}
        contentArr={data?.content.tags}
        top={25}
        category={"tags"}
      />
    </MainContentLayout>
  );
};

export default HomePageContent;

HomePageContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object,
};
