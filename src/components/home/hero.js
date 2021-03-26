import React, { useContext, useState, useEffect } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Row, Col } from 'react-bootstrap';
import { ArrowDownOutlined } from '@ant-design/icons';

import { Section, Container } from '../../styled-components';
import FormProperty from '../forms/properties'

const MainCont = styled(Section)`
  ::before{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    //background-image: linear-gradient( 67.2deg,  rgba(37,208,199,.7) -7.5%, rgba(165,90,240,.7) 62.7% ), url("${require("../../images/home-about-hero-background.jpg")}");
    background-size: cover;
    background-position: center;
    width: 50%;
    height: calc(75vh - 153.38px);
    @media(min-width: 1350px){
      height: calc(50vh - 117.38px);
    }
  }
`
const TitleCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;
  height: calc(50vh - 95.38px);
  @media(min-width: 768px){
    height: calc(75vh - 153.38px);
  }
  @media(min-width: 1350px){
    height: calc(60vh - 117.38px);
  }
`
const Title = styled.h1`
  font-size: 2.1rem;
  color: ${props => props.theme.primaryColor};
`
const SubTitle = styled.p`

`
const FormCont = styled.div`
  position: relative;
  z-index: 105;
  width: 80%;
`
const VideoCont = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(min-width: 768px){
    height: 40vh;
  }
`
const VideoOverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;  
  top: 0;
  left: 0;
  background-image: linear-gradient( 67.2deg, rgba(165,90,240,.6) -7.5%, rgba(37,208,199,.6) 62.7% );
  z-index: 100;
`
const ChileVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
`
const DownLink = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, .7) !important;
  transition: 250ms ease;
  position: absolute;
  bottom: 1rem;
  z-index: 105;
  &:hover{
    color: ${props => props.theme.primaryColor} !important;
  }
`

export default ()=> {
  const state = useContext(context);

  useEffect(()=>{
    gsap.from(".hero-animate", {
      opacity: 0,
      y: 10,
      duration: 1,
      ease:"back.out(1.7)",
      stagger: .25,
    });

    gsap.to("#downButton", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    })
  },[]);

  return(
    <MainCont first height="100vh">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <TitleCont>
              <Title id="title" className="hero-animate">
                AHORA ES MÁS FÁCIL ENCONTRAR TU HOGAR
              </Title>
              <SubTitle className="hero-animate">
                En PM Propiedades nos enfocamos en lo que necesitas y te conectamos con lo que buscas.
              </SubTitle>
            </TitleCont>
          </Col>     
          <Col xs={12} className="d-flex justify-content-center">
            <DownLink id="downButton" href="#properties" className="hero-animate">
              <ArrowDownOutlined />
            </DownLink>
          </Col>
        </Row>
      </Container>
      <VideoCont className="hero-animate">
        <ChileVideo
          src={require('../../videos/hero.mp4')}
          autoPlay
          loop
          muted
          playsinline
          poster={require('../../images/hero.jpg')}
        />
        <VideoOverLay />
        <FormCont className="hero-animate">
          <FormProperty id="formSearch" />
        </FormCont>
      </VideoCont>         
    </MainCont>
    /*<MainCont 
      src={state.home.hero.background} first height="100vh"
    >
      <Container>
        <Title id="title" dangerouslySetInnerHTML={{ __html: state.home.hero.title }} />
        <SearchOptionCont id="search">
          <SearchOption active={!byCode} onClick={()=> setByCode(false)}>
            Buscar propiedad
            <ButtonLine active={!byCode} />
          </SearchOption>
          <SearchOption active={byCode} onClick={()=> setByCode(true)}>
            Buscar por código
            <ButtonLine active={byCode} />
          </SearchOption>          
        </SearchOptionCont>
        {
          byCode          
          ?<FormCode />
          :<FormProperty id="formSearch" />
        }
      </Container>
      <DownLink id="downButton" href="#properties">
        <DownOutlined />
      </DownLink>
    </MainCont>*/
  )
}