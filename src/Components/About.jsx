import React from 'react';
import styled from 'styled-components';
import hr from './hr.jpg';

const AboutPage = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 1rem;
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

const AboutMe = styled.p`
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

export const About = () => {
  return (
    <AboutPage>
      <Card>
        <Painting src={hr} alt='Hanna Rüter' />
        <DetailsContainer>
          <AboutMe>
            {' '}
            Hej!
            <br />
            Jag heter Hanna och jag gillar bland annat blommor, även om de
            vissnat. Ibland fastnar dem på bild. Vill du ha en vissen eller
            ovissen blombild så finns dem att köpa. Det går även att få dem i
            andra storlekar eller material än det som står utskrivet.
          </AboutMe>
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
    </AboutPage>
  );
};
