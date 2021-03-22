import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 14rem;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  z-index: 999;
`;

const HeaderNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  font-family: 'Fredericka the Great', cursive;
  /* font-family: 'Frijole', cursive; */
  /* font-family: 'Syne Mono', monospace; */
  margin: 2rem 0 0;
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  margin: 0;
  text-transform: uppercase;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  justify-content: space-evenly;
`;

const NavContent = styled.p`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin: 0;
  text-transform: uppercase;
`;

export const StickyHeader = () => {
  return (
    <Header>
      <HeaderNav>
        <Name>Hanna Rüter</Name>
        <Title>Flower Photographer</Title>
        <NavBar>
          <NavContent>About</NavContent>
          <NavContent>Contact</NavContent>
          <NavContent>Pictures</NavContent>
        </NavBar>
      </HeaderNav>
    </Header>
  );
};
