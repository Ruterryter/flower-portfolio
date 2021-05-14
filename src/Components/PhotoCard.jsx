import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  margin-bottom: 2rem;
  overflow: hidden;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  border: 0.1rem solid;
  border-color: #262923;
  padding: 1rem;
  box-shadow: 5px 10px;

  &:hover {
    color: #362335;
  }

  @media only screen and (max-width: 600px) {
    width: 25rem;
  }
`;

const DetailsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start; ;
`;

const Painting = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  color: #262923;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
`;

const Details = styled.p`
  color: #262923;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  margin-top: 1px;
  margin-bottom: 1px;
`;

const Price = styled.p`
  color: #262923;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  margin-top: 1px;
  margin-bottom: 1px;
`;

export const PhotoCard = ({ title, image, details, price }) => {
  return (
    <>
      <Card>
        <Painting src={image} alt={title} />
        <DetailsContainer>
          <Title>{title}</Title>
          <Details>{details}</Details>
          <Price>{price}</Price>
        </DetailsContainer>
      </Card>
    </>
  );
};
