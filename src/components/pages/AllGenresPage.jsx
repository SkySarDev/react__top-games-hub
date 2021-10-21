import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GenreCard from "components/cards/GenreCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

const AllGenresPage = ({ genresList }) => {
  return (
    <div>
      <h1 style={{ fontSize: 30 }}>Genres</h1>
      <Grid>
        {genresList.map((genre) => (
          <GenreCard key={genre.id} data={genre} />
        ))}
      </Grid>
    </div>
  );
};

AllGenresPage.propTypes = {
  genresList: PropTypes.array.isRequired,
};

export default AllGenresPage;
