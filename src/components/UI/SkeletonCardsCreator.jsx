import React from "react";
import PropTypes from "prop-types";

const SkeletonCardsCreator = ({ CardsComponent, length }) => {
  return Array.from({ length }, (_, i) => <CardsComponent key={i} />);
};

export default SkeletonCardsCreator;

SkeletonCardsCreator.propTypes = {
  CardsComponent: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};
