import React from "react";
import styled from "styled-components";

import SkeletonLine from "components/UI/SkeletonLine";

const Grid = styled.div`
  display: flex;
  column-gap: 5px;
`;

const Item = styled.div`
  width: 100px;
  height: 35px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #59584c;
  border-radius: 3px;
  padding: 5px;
`;

const GenresListSkeleton = () => {
  return (
    <Grid>
      {Array.from({ length: 3 }, (_, i) => {
        return (
          <Item key={i}>
            <SkeletonLine />
          </Item>
        );
      })}
    </Grid>
  );
};

export default GenresListSkeleton;
