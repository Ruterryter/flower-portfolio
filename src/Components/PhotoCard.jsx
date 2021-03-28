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
  cursor: pointer;
  position: relative;

  &:hover {
    border: 0.1rem solid;
    padding: 1rem;
    box-shadow: 5px 10px;
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
`;

const Title = styled.h3`
  margin-bottom: 7px;
  color: black;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
`;

export const PhotoCard = ({ title, image }) => {
  return (
    <>
      <Card>
        <Painting src={image} alt={title} />
        <DetailsContainer>
          <Title>{title}</Title>
        </DetailsContainer>
      </Card>
    </>
  );
};
