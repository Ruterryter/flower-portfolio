import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppHeader } from './Components/Header';
import styled from 'styled-components';
import { Gallery } from './Components/Gallery';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw; ;
`;

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppWrapper>
          <AppHeader />
          <Switch>
            <Route path='/' exact>
              <Gallery />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/kontakt' exact>
              <Contact />
            </Route>
          </Switch>
        </AppWrapper>
      </BrowserRouter>
    </>
  );
};
