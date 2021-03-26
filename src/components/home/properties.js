import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Row, Col } from 'react-bootstrap';
import { EnvironmentOutlined } from '@ant-design/icons';

import { Section, Button, Container } from '../../styled-components';
import Carousel from '../carousels/properties';

const Title = styled.p`
  //color: ${props => props.theme.primaryColor};
  margin-bottom: 2rem;
  color: rgba(0, 0, 0, .5);
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
const Banner = styled.div`
  background-color: ${props => props.theme.primaryColor};
  padding: 3rem 2rem;
  color: #fff;
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
          <Banner>
            <Row>
              <Col xs={12} md={9}>              
                <BannerText>
                  <EnvironmentOutlined style={{ marginRight: "1rem", fontSize: "1.5rem" }} />
                  {state.home.properties.footer}
                </BannerText>
              </Col>
              <Col xs={12} md={3}>
                <AniLink paintDrip hex={state.primaryColor} to="/properties" duration={.5}>
                  <Button
                    block
                  >
                    {state.home.properties.buttonText}
                  </Button>
                </AniLink>
              </Col>            
            </Row>
          </Banner>
        </Container>
    </Section>
  )
}