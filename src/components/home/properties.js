import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import Link from "../link";
import { Row, Col } from 'react-bootstrap';
import { EnvironmentOutlined, PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { Section, Button, Container } from '../../styled-components';
import Carousel from '../carousels/properties';

const Title = styled.p`
  //color: ${props => props.theme.primaryColor};
  margin-bottom: 2rem;
  color: rgba(0, 0, 0, .5);
  color: ${props => props.theme.primaryColor};
`
const SubTitle = styled.p`
  font-size: 2.5rem;
  width: 60%;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
`
const PropertiesCarouselCont = styled.div`
  min-height: 50vh;
  margin-bottom: 1rem;
`
const Banner = styled.button`
  width: 100%;
  padding: 4rem 0;
  font-size: 1.5rem;
  background-color: transparent;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
  border: none;
  border-top: 2px solid rgb(213, 213, 213);
  border-bottom: 2px solid rgb(213, 213, 213);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: hsl(0, 0%, 43%);
  transition: 250ms ease;
  &:hover{
    color: hsl(0, 0%, 13%);
  }
  span{
    font-size: 2.5rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    font-family: 'Raleway', sans-serif !important;
    font-weight: 300;
  }
`

const BannerText = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`


export default ()=>{
  const state = useContext(context);

  return(
    <Section id="properties">
        <Container>
          <Title>
            PROPIEDADES DESTACADAS
          </Title>
          <SubTitle>
            Conoce aquí lo más destacado que tenemos para ti
          </SubTitle>
        </Container>
        <PropertiesCarouselCont>
          <Carousel />
        </PropertiesCarouselCont>
        <Container>
          <Link to="/properties">
            <Banner>
              {state.home.properties.footer}
              <span>
                Ver más
                <ArrowRightOutlined />
              </span>
            </Banner>
          </Link>
{/*          <Banner>
            <Row>
              <Col xs={12} md={9}>              
                <BannerText>
                  <EnvironmentOutlined style={{ marginRight: "1rem", fontSize: "1.5rem" }} />
                  {state.home.properties.footer}
                </BannerText>
              </Col>
              <Col xs={12} md={3}>
                <Link paintDrip hex={state.primaryColor} to="/properties" duration={.5}>
                  <Button
                    primary
                    block
                  >
                    {state.home.properties.buttonText}
                  </Button>
                </Link>
              </Col>            
            </Row>
</Banner>*/}
        </Container>
    </Section>
  )
}