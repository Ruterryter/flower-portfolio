import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from './PhotoCard';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px;
`;

const Heading = styled.h3`
  color: #477a87;
  font-size: 34px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Marcellus SC', serif;
`;

const photos = [
  {
    id: 1,
    title: 'Lipstick Anemone',
    price: 2000,
    image: require('./photoassets/anemonekvadrat.jpg'),
    description: 'Akryl på Canvas 80 x 80cm ',
    sold: false,
  },
  {
    id: 2,
    title: 'Lipstick standup',
    price: 2500,
    image: require('./photoassets/anemonstaende.jpg'),
    description: 'Akryl på Canvas 100 x 100cm',
    sold: false,
  },
];

export const Gallery = () => {
  return (
    <>
      <Heading> Mina tavlor </Heading>
      <GalleryWrapper>
        {photos.map((photo) => {
          return (
            <PhotoCard
              title={photo.title}
              price={photo.price}
              image={photo.image}
              description={photo.description}
              sold={photo.sold}
            />
          );
        })}
      </GalleryWrapper>
    </>
  );
};
