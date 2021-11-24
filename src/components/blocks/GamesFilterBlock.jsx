import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import {
  genresList,
  orderingList,
  platformsList,
} from "components/blocks/Filter/filtersList";
import FilterSelectMenu from "components/blocks/Filter/FilterSelectMenu";

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(6, auto);
  column-gap: 10px;
  font-size: 18px;
`;

const GamesFilterBlock = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const applyFilters = (filterName, value) => {
    if (!value) {
      searchParams.delete(filterName);
    } else {
      searchParams.set(filterName, value);
    }

    setSearchParams(searchParams);
  };

  return (
    <Wrapper>
      Order by:
      <FilterSelectMenu
        changeFilters={applyFilters}
        filterName={"ordering"}
        options={orderingList}
        searchParams={searchParams}
      />
      Platforms:
      <FilterSelectMenu
        changeFilters={applyFilters}
        filterName={"platforms"}
        options={platformsList}
        searchParams={searchParams}
      />
      Genres:
      <FilterSelectMenu
        changeFilters={applyFilters}
        filterName={"genres"}
        options={genresList}
        searchParams={searchParams}
      />
    </Wrapper>
  );
};

export default GamesFilterBlock;
