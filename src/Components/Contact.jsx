import React from 'react';
import styled from 'styled-components';
import rostre from './rostre.jpg';

const ContactPage = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  @media only screen and (max-width: 600px) {
    margin: 1rem;
  }
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
  @media only screen and (max-width: 600px) {
    width: 17rem;
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

const Title = styled.h3`
  text-align: center;
  margin-bottom: 7px;
  color: #262923;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
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
    color: #956e96;
  }
`;

export const Contact = () => {
  return (
    <ContactPage>
      <Card>
        <DetailsContainer>
          <Title>Kontakta mig</Title>
          <MailLink
            aria-label='Hannas mail'
            href='mailto:hanna.ruter@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Email: Hanna Rüter
          </MailLink>
          <MailLink
            aria-label='Instagram'
            href='https://www.instagram.com/withering_highs/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram: Withering_highs
          </MailLink>
        </DetailsContainer>
        <Painting src={rostre} alt='rosor' />
      </Card>
    </ContactPage>
  );
};
