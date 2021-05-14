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
    title: 'Tulips are not forever',
    image: 'https://drive.google.com/uc?id=1L-DopBpID1cWM_qX4Wpl-iD6Uo0WNCsV',
    details: 'Aluminium 45 x 45cm',
    price: '2900 SEK',
  },
  {
    id: 2,
    title: 'Books not dreams',
    image: 'https://drive.google.com/uc?id=1e3lm5td5GZJ3UcjiDP7_ZXo7V80MVbQS',
    details: 'Canvas 50 x 50cm',
    price: '2900 SEK',
  },
  {
    id: 3,
    title: 'All good things ...',
    image: 'https://drive.google.com/uc?id=1YM92_xZbkV_BBZq7iKKAibTZibqqdj83',
    details: 'Canvas 50 x 50cm',
    price: '2900 SEK',
  },
  {
    id: 4,
    title: 'Fall Once More',
    image: 'https://drive.google.com/uc?id=1WvoYuoiUIfR4mIkdbvferFOKuagJmdHb',
    details: 'Plexiglas el aluminium 30 x 30cm',
    price: '2500 SEK',
  },
  {
    id: 5,
    title: 'Lipstick Laugther',
    image: 'https://drive.google.com/uc?id=12p-u-NqxnqMN9T1AHdcPQjTmATni2qnO',
    details: 'Kontakta mig vid intresse',
  },
  {
    id: 6,
    title: 'Beacause of no rain',
    image: 'https://drive.google.com/uc?id=1Ju-tSlMpZ5imSG6GAOmj2xUEr6gsS7Gx',
    details: 'Kontakta mig vid intresse',
  },
  {
    id: 7,
    title: 'You can keep me',
    image: 'https://drive.google.com/uc?id=1r8K_qfF5x_RZe_Pf0dxkxHPOUgpfGw77',
    details: 'Kontakta mig vid intresse',
  },
  {
    id: 8,
    title: 'Take a bow',
    image: 'https://drive.google.com/uc?id=1CcFGEAlxGDGvF0GIyVv0F1hHZ5YQhaZb',
    details: 'Canvas 50 x 50cm',
    price: '2900 SEK',
  },
  {
    id: 9,
    title: 'Wrinkle',
    image: 'https://drive.google.com/uc?id=1ke_NtJaEd1VSky6lsACyKxHoCAnh49Ar',
    details: 'Aluminium 40 x 40cm',
    price: '2750 SEK',
  },

  {
    id: 10,
    title: 'Sad and done',
    image: 'https://drive.google.com/uc?id=1GwLUhn4FGTnajTZacuOamMr4YuDAqAmi',
    details: 'Kontakta mig vid intresse',
  },
  {
    id: 11,
    title: 'I Said No',
    image: 'https://drive.google.com/uc?id=1wfRkXeMmwpLdoNZICwNejq12CkGjKO-P',
    details: 'Aluminium 40 x 60cm',
    price: '2750 SEK',
  },
  {
    id: 12,
    title: 'Fall Longer',
    image: 'https://drive.google.com/uc?id=1T3nQ_JjquUsyrV6GgP9Sli0-aJxyo97h',
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
