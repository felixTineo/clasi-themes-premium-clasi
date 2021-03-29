import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Link from "./link";

import { Section, Button, Container } from '../styled-components';

const SectionCustom = styled(Section)` 
  padding: 2rem 0;
  background-color: ${props => props.theme.primaryColor};
  color: #fff;
`
const Title = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  @media(min-width:768px){
    margin-bottom: 0;
  }
`
export default ()=> {
  const state = useContext(context);
  return(
    <SectionCustom>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={9}>
            <Title>
              {state.about.ubication.title}
            </Title>
          </Col>
          <Col xs={12} md={3}>
            <Link paintDrip hex={state.primaryColor} to="/contact" duration={.5}>
              <Button
                block
              >
                Contáctanos
              </Button>
            </Link>
          </Col>          
        </Row>
      </Container>
    </SectionCustom>
  )
}