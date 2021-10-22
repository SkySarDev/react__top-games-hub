import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GenreCard from "components/cards/GenreCard";
import MainContentLayout from "components/UI/MainContentLayout";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
`;

const AllGenresPage = ({ genresList }) => {
  return (
    <MainContentLayout title={"All genres"}>
      <Grid>
        {genresList.map((genre) => (
          <GenreCard key={genre.id} data={genre} />
        ))}
      </Grid>
    </MainContentLayout>
  );
};

AllGenresPage.propTypes = {
  genresList: PropTypes.array.isRequired,
};

export default AllGenresPage;
