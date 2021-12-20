import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import defaultHeaderImg from "images/default-header-image.jpg";

const Header = styled.header`
  position: fixed;
  top: 15px;
  width: 1120px;
  height: 630px;
  background-image: url(${({ headerImage }) => headerImage});
  background-position: center;
  background-size: cover;

  @media (max-width: 1200px) {
    width: 880px;
    height: 495px;
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    z-index: -1;
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
  }
`;

const ContentHeader = ({ image }) => {
  const headerImg = image || defaultHeaderImg;

  return <Header headerImage={headerImg} />;
};

ContentHeader.propTypes = {
  image: PropTypes.string,
};

export default ContentHeader;
