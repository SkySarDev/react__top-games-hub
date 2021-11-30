import React from "react";
import { useSelector } from "react-redux";

import ContentHeader from "components/UI/ContentHeader";

const ContentHeaderContainer = () => {
  const { backgroundImg } = useSelector((state) => state.mainContent.data);

  return <ContentHeader image={backgroundImg} />;
};

export default ContentHeaderContainer;
