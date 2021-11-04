import React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";

const ScoreBox = styled.div(({ score, size = 25, fontSize = 14 }) => ({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "100%",
  width: size + "px",
  height: size + "px",
  borderRadius: "5px",
  fontSize: fontSize + "px",
  fontWeight: "bold",
  color: "#faf8ea",
  boxShadow: "0 0 2px 1px rgb(27 27 27 / 35%)",
  backgroundColor: score < 50 ? "#9f0000" : score < 75 ? "#9d7c08" : "#4f972c",
}));

const MetacriticScore = ({ score, options }) => {
  return (
    <ScoreBox score={score} {...options}>
      {score}
    </ScoreBox>
  );
};

export default MetacriticScore;

MetacriticScore.propTypes = {
  score: PropTypes.number.isRequired,
  options: PropTypes.object,
};
