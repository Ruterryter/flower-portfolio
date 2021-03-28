import React from 'react';
import { StickyHeader } from './Components/Header';
import styled from 'styled-components';
import { Gallery } from './Components/Gallery';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #a6afb2;
`;

export const App = () => {
  return (
    <AppWrapper>
      <StickyHeader />;
      <Gallery />
    </AppWrapper>
  );
};
