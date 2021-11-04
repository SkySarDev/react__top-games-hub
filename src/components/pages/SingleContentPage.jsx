import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";
import SectionTitle from "components/UI/SectionTitle";
import GamesListGrid from "components/blocks/GamesListGrid";

const Container = styled.div`
  padding: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 130%;
  margin-bottom: 20px;
`;

const GamesCount = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #999999;
  margin-bottom: 20px;
`;

const SingleContentPage = ({ name, description, games_count, results }) => {
  return (
    <MainContentLayout title={name}>
      <Container>
        {description && (
          <>
            <SectionTitle bottom={10}>Description</SectionTitle>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </>
        )}
        <SectionTitle bottom={10}>Games count</SectionTitle>
        <GamesCount>{games_count}</GamesCount>
        <GamesListGrid gamesList={results} />
      </Container>
    </MainContentLayout>
  );
};

SingleContentPage.propTypes = {
  description: PropTypes.string,
  games_count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
};

export default SingleContentPage;
