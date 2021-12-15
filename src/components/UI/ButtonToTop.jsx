import React, { useEffect, useState } from "react";
import styled from "styled-components";

import arrowToTop from "images/arrow-to-top.svg";

const Icon = styled.img`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ButtonToTop = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(window.scrollY);

  const handleOnClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scroll > 300 && (
        <Icon src={arrowToTop} alt="To top" onClick={handleOnClick} />
      )}
    </>
  );
};

export default ButtonToTop;
