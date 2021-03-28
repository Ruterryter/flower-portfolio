import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from './PhotoCard';
import hostanemonekvadrat from '../photoassets/hostanemonekvadrat.jpg';
import anemonekvadrat from '../photoassets/anemonekvadrat.jpg';
import anemonstaende from '../photoassets/anemonstaende.jpg';
import staendehostanemone from '../photoassets/staendehostanemone.jpg';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px;
`;

const photos = [
  {
    id: 1,
    title: 'Lipstick Laugther',
    image: anemonekvadrat,
  },
  {
    id: 2,
    title: 'Fall Once More',
    image: hostanemonekvadrat,
  },
  {
    id: 3,
    title: 'I Said No',
    image: anemonstaende,
  },
  {
    id: 4,
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
