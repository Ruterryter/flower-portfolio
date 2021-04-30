import React from 'react';
import styled from 'styled-components';
import hanna_bast from './hanna_bast.jpg';

const ContactPage = styled.div`
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
  border-color: #956e96;
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
  width: 100%;
`;

const MailLink = styled.a`
  text-align: center;
  margin-top: 7px;
  color: #262923;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #bce3c6;
  }
`;

export const Contact = () => {
  return (
    <ContactPage>
      <Card>
        <Painting src={hanna_bast} alt='Hanna Rüter' />
        <DetailsContainer>
          <MailLink
            aria-label='Hannas mail'
            href='mailto:hanna.ruter@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Maila mig vid intresse.
          </MailLink>
        </DetailsContainer>
      </Card>
    </ContactPage>
  );
};
