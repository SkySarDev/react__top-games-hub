import React from "react";
import PropTypes from "prop-types";

import GenreCard from "components/cards/GenreCard";
import MainContentLayout from "components/UI/MainContentLayout";
import ContentGrid from "components/UI/ContentGrid";

const AllGenresPage = ({ genresList }) => {
  return (
    <MainContentLayout title={"All genres"}>
      <ContentGrid>
        {genresList.map((genre) => (
          <GenreCard key={genre.id} {...genre} />
        ))}
      </ContentGrid>
    </MainContentLayout>
  );
};

AllGenresPage.propTypes = {
  genresList: PropTypes.array.isRequired,
};

export default AllGenresPage;
