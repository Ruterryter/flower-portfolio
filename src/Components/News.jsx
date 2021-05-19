import React from 'react';
import styled from 'styled-components';
import teatime from './PhotoGallery/teatime.jpg';

const NewsPage = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

const Card = styled.div`
  background-color: white;
  margin-bottom: 2rem;
  overflow: hidden;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0.1rem solid;
  border-color: #262923;
  padding: 1rem;
  box-shadow: 5px 10px;
`;

const DetailsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start; ;
`;

const Painting = styled.img`
  width: 30rem;
  align-self: center;
  @media only screen and (max-width: 600px) {
    width: 18rem;
  }
`;

const NewsText = styled.p`
  text-align: center;
  margin-bottom: 7px;
  color: #262923;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
`;

const Linking = styled.a`
  text-align: center;
  margin-top: 7px;
  color: #262923;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  &:hover {
    color: #956e96;
  }
`;

export const News = () => {
  return (
    <NewsPage>
      <Card>
        <DetailsContainer>
          <NewsText>
            Kom och kika på mina tavlor när jag ställer ut på{' '}
            <Linking
              href='https://www.instagram.com/lindasfingermat/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram Lindas Fingermat'
            >
              Lindas Fingermat{' '}
            </Linking>
            i Skanörs hamn mellan den 10 juni till den 10 juli. Passa på att
            njut av den goda maten och ett gott glas vin samtidigt.
          </NewsText>
        </DetailsContainer>
        <Painting src={teatime} alt='tekopp' />
      </Card>
    </NewsPage>
  );
};
