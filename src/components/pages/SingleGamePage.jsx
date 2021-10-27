import React from "react";
import styled from "styled-components";

import MainContentLayout from "components/UI/MainContentLayout";

const Container = styled.div`
  padding: 20px;
`;

const ContentTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 20px;
`;

const SingleGamePage = ({ data }) => {
  const { name, description } = data;
  return (
    <MainContentLayout title={name}>
      <Container>
        <ContentTitle>Description:</ContentTitle>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Container>
    </MainContentLayout>
  );
};

export default SingleGamePage;
