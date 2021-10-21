import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.header`
  position: relative;
  width: 1100px;
  height: 619px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const DarkenImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      50% 150% at 50% 50%,
      rgba(27, 27, 27, 0) 0%,
      rgba(27, 27, 27, 0.8) 80%,
      #1b1b1b 100%
    ),
    radial-gradient(
      150% 50% at 50% 50%,
      rgba(27, 27, 27, 0) 0%,
      rgba(27, 27, 27, 0.8) 80%,
      #1b1b1b 100%
    );
`;

const ContentHeader = ({ image }) => {
  return (
    <Header image={image}>
      <DarkenImage />
    </Header>
  );
};

ContentHeader.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ContentHeader;
