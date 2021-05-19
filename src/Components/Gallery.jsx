import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from './PhotoCard';
import blatulpanInsta from './PhotoGallery/blatulpanInsta.jpg';
import LinjeInsta from './PhotoGallery/LinjeInsta.jpg';
import rakKvadratInsta2 from './PhotoGallery/rakKvadratInsta2.jpg';
import rosorStaende from './PhotoGallery/rosorStaende.jpg';
import anemonKvadrat from './PhotoGallery/anemonKvadrat.jpg';
import torkadJulrosInsta from './PhotoGallery/torkadJulrosInsta.jpg';
import sommarKvadrat from './PhotoGallery/sommarKvadrat.jpg';
import anemonStaende1 from './PhotoGallery/anemonStaende1.jpg';
import torkad from './PhotoGallery/torkad.jpg';
import rosorRoda from './PhotoGallery/rosorRoda.jpg';
import bookish from './PhotoGallery/bookish.jpg';
import instaDarkKvadrat from './PhotoGallery/instaDarkKvadrat.jpg';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem;
`;

const photos = [
  {
    id: 1,
    title: 'Tulips are not forever',
    image: blatulpanInsta,
    details: 'Aluminium 45 x 45cm',
    price: '2900 SEK',
  },
  {
    id: 2,
    title: 'Books not dreams',
    image: LinjeInsta,
    details: 'Canvas 50 x 50cm',
    price: '2900 SEK',
  },
  {
    id: 3,
    title: 'All good things ...',
    image: sommarKvadrat,
    details: 'Canvas 50 x 50cm',
    price: '2900 SEK',
  },
  {
    id: 4,
    title: 'Fall Once More',
    image: anemonKvadrat,
    details: 'Plexiglas el aluminium 30 x 30cm',
    price: '2500 SEK',
  },
  {
    id: 5,
    title: 'Penolope',
    image: bookish,
    details: 'Aluminium 30 x 30',
    price: '2250 SEK',
  },
  {
    id: 6,
    title: 'Beacause of no rain',
    image: torkad,
    details: 'Canvas el aluminium 50 x 50 cm',
    price: '2500 SEK / 2900 SEK',
  },
  {
    id: 7,
    title: 'You can keep me',
    image: instaDarkKvadrat,
    details: 'Kontakta mig vid intresse',
  },
  {
    id: 8,
    title: 'Take a bow',
    image: rosorRoda,
    details: 'Canvas 50 x 50cm',
    price: '2900 SEK',
  },
  {
    id: 9,
    title: 'Wrinkle',
    image: rakKvadratInsta2,
    details: 'Aluminium 40 x 40cm',
    price: '2750 SEK',
  },

  {
    id: 10,
    title: 'Sad and done',
    image: torkadJulrosInsta,
    details: 'Kontakta mig vid intresse',
  },
  {
    id: 11,
    title: 'I Said No',
    image: rosorStaende,
    details: 'Aluminium 40 x 60cm',
    price: '2750 SEK',
  },
  {
    id: 12,
    title: 'Fall Longer',
    image: anemonStaende1,
    details: 'Kontakta mig vid intresse',
  },
];

export const Gallery = () => {
  return (
    <>
      <GalleryWrapper>
        {photos.map((photo) => {
          return (
            <PhotoCard
              title={photo.title}
              image={photo.image}
              details={photo.details}
              price={photo.price}
            />
          );
        })}
      </GalleryWrapper>
    </>
  );
};
