import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 14rem;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  color: #6a5569;
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  margin: 0.2rem;
  text-transform: uppercase;
  color: #362335;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  justify-content: space-evenly;
`;

const NavContent = styled.p`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin: 0;
  text-transform: uppercase;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: #262923;

  &:hover {
    color: #6a5569;
  }
`;

export const AppHeader = () => {
  return (
    <Header>
      <HeaderNav>
        <LinkTo to='/'>
          <Name>Hanna Rüter</Name>
          <Title>Blommor på bild</Title>
        </LinkTo>
        <NavBar>
          <LinkTo to='/about'>
            <NavContent>Om</NavContent>
          </LinkTo>
          <NavContent>Kontakt</NavContent>
          <NavContent>Aktuellt</NavContent>
        </NavBar>
      </HeaderNav>
    </Header>
  );
};
