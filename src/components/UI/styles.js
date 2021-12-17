import styled from "styled-components";

export const MainTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-top: ${({ top }) => top || 0}px;
  margin-bottom: ${({ bottom }) => bottom || 0}px;
`;

export const BlankWrapper = styled.div`
  background: #111210;
  border: 1px solid #59584c;
  border-radius: 3px;
`;

export const CardAbsoluteDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
