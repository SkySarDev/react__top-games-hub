import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div style={{ padding: 20, backgroundColor: "grey" }}>
      <NavLink to={"/"} activeStyle={{ color: "green" }} exact>
        Home
      </NavLink>
      /
      <NavLink to={"/games/casual"} activeStyle={{ color: "green" }}>
        Casual
      </NavLink>
      /
      <NavLink to={"/games/strategy"} activeStyle={{ color: "green" }}>
        Strategy
      </NavLink>
    </div>
  );
};

export default Menu;
