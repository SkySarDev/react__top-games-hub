import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ROUTE_GAMES } from "utils/constants";

import searchIcon from "images/icons/search.svg";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 10px;
  margin: 50px 20px 15px;
  height: 30px;
  border: 1px solid #59584c;
  border-radius: 3px;
  padding: 0 7px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  border-radius: 3px;
  background-color: transparent;
  color: #999999;
`;

const Button = styled.button`
  background-color: transparent;
`;

const ButtonImg = styled.img`
  width: 18px;
  height: 18px;
  opacity: 0.7;
`;

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const inputChangeHandler = (e) => setInputValue(e.target.value);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    navigate(`${ROUTE_GAMES}?search=${inputValue}&search_exact=true`);
    setInputValue("");
  };

  return (
    <Form onSubmit={formSubmitHandler}>
      <SearchInput
        type="text"
        placeholder="Search games"
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <Button>
        <ButtonImg src={searchIcon} alt="Search" />
      </Button>
    </Form>
  );
};

export default Searchbar;
