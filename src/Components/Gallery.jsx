import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from './PhotoCard';
import hostanemonekvadrat from '../photoassets/hostanemonekvadrat.jpg';
import anemonekvadrat from '../photoassets/anemonekvadrat.jpg';
import anemonstaende from '../photoassets/anemonstaende.jpg';
import staendehostanemone from '../photoassets/staendehostanemone.jpg';
import te2 from '../photoassets/te2.jpg';
import blandadkvadrat from '../photoassets/blandadkvadrat.jpg';
import kvadratInsta from '../photoassets/kvadratInsta.jpg';
import instaDarkKvadrat from '../photoassets/instaDarkKvadrat.jpg';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem;
`;

const photos = [
  {
    id: 1,
    title: 'All good things ...',
    image: blandadkvadrat,
  },
  {
    id: 2,
    title: 'Fall Once More',
    image: hostanemonekvadrat,
  },
  {
    id: 3,
    title: 'Lipstick Laugther',
    image: anemonekvadrat,
  },
  {
    id: 4,
    title: 'Beacause of no rain',
    image: kvadratInsta,
  },
  {
    id: 5,
    title: 'You can keep me',
    image: instaDarkKvadrat,
  },
  {
    id: 6,
    title: 'Tea or me?',
    image: te2,
  },
  {
    id: 7,
    title: 'I Said No',
    image: anemonstaende,
  },
  {
    id: 8,
    title: 'Fall Longer',
    image: staendehostanemone,
  },
];

export const Gallery = () => {
  return (
    <>
      <GalleryWrapper>
        {photos.map((photo) => {
          return <PhotoCard title={photo.title} image={photo.image} />;
        })}
      </GalleryWrapper>
    </>
  );
};
