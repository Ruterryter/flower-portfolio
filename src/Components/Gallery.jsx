import React from 'react';
import styled from 'styled-components';
import { PhotoCard } from './PhotoCard';

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
    image: 'https://drive.google.com/uc?id=1YM92_xZbkV_BBZq7iKKAibTZibqqdj83',
  },
  {
    id: 2,
    title: 'Fall Once More',
    image: 'https://drive.google.com/uc?id=1WvoYuoiUIfR4mIkdbvferFOKuagJmdHb',
  },
  {
    id: 3,
    title: 'Lipstick Laugther',
    image: 'https://drive.google.com/uc?id=12p-u-NqxnqMN9T1AHdcPQjTmATni2qnO',
  },
  {
    id: 4,
    title: 'Beacause of no rain',
    image: 'https://drive.google.com/uc?id=1Ju-tSlMpZ5imSG6GAOmj2xUEr6gsS7Gx',
  },
  {
    id: 5,
    title: 'You can keep me',
    image: 'https://drive.google.com/uc?id=1r8K_qfF5x_RZe_Pf0dxkxHPOUgpfGw77',
  },
  {
    id: 6,
    title: 'Take a bow',
    image: 'https://drive.google.com/uc?id=1CcFGEAlxGDGvF0GIyVv0F1hHZ5YQhaZb',
  },
  {
    id: 7,
    title: 'Wrinkle',
    image: 'https://drive.google.com/uc?id=1ke_NtJaEd1VSky6lsACyKxHoCAnh49Ar',
  },

  {
    id: 8,
    title: 'Sad and done',
    image: 'https://drive.google.com/uc?id=1GwLUhn4FGTnajTZacuOamMr4YuDAqAmi',
  },
  {
    id: 9,
    title: 'I Said No',
    image: 'https://drive.google.com/uc?id=1wfRkXeMmwpLdoNZICwNejq12CkGjKO-P',
  },
  {
    id: 10,
    title: 'Fall Longer',
    image: 'https://drive.google.com/uc?id=1T3nQ_JjquUsyrV6GgP9Sli0-aJxyo97h',
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
