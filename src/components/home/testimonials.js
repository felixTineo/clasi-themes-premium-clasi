import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { v1 as uuid } from 'uuid';

import { Section, Button, Container } from '../../styled-components';

const Title = styled.p`
  //color: ${props => props.theme.primaryColor};
  margin-bottom: 2rem;
  color: rgba(0, 0, 0, .5);
  color: ${props => props.theme.primaryColor};
`
const SubTitle = styled.p`
  font-size: 2.5rem;
  width: 100%;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
  @media(min-width: 768px){
    width: 60%;
  }
`
const ReviewCont = styled.div`
  margin: 1rem 0;
  padding: 0 2rem;
`
const Review = styled.p`
  margin: 0;
  color: gray;
  font-style: italic;
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
  }
`
const Author = styled.p`
  margin: 0;
  text-align: center;
  @media(min-width: 768px){
    text-align: left;
  }
`

export default ()=> {
  const REVIEWS = useContext(context).home.reviews.items;
  return(
    <Section>
      <Container>
        <Title>TESTIMONIOS</Title>
        <SubTitle>
          Nuestros clientes hablan por nosotros
        </SubTitle>        
        <Row>
          {
            REVIEWS.map(item => (
              <Col key={uuid()} xs={12} md={6}>
                <ReviewCont>
                  <Review>
                    "{item.review}"
                  </Review>
                  <Author>
                    -{item.author}
                  </Author>
                </ReviewCont>
              </Col>
            ))
          }
        </Row>
      </Container>
    </Section>
  )
}