import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Select = styled.select`
  font-size: 17px;
  font-family: inherit;
  padding: 3px 5px;
  cursor: pointer;
  background: #111210;
  border: 1px solid #59584c;
  border-radius: 3px;
  color: #e2e0d0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-align: center;
`;

const FilterSelectMenu = ({
  searchParams,
  options,
  filterName,
  changeFilters,
}) => {
  const selectedValue = searchParams.get(filterName) || "";

  const onChangeHandler = (e) => changeFilters(filterName, e.target.value);

  return (
    <Select value={selectedValue} onChange={onChangeHandler}>
      {options.map((optionItem) => {
        const { name, value } = optionItem;

        return (
          <option value={value} key={name}>
            {name}
          </option>
        );
      })}
    </Select>
  );
};

export default FilterSelectMenu;

FilterSelectMenu.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  searchParams: PropTypes.object.isRequired,
};
