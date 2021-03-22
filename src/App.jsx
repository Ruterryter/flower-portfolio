import React from 'react';
import { StickyHeader } from './Components/Header';
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #a6afb2;
`;

export const App = () => {
  return (
    <AppWrapper>
      <StickyHeader />;
    </AppWrapper>
  );
};
