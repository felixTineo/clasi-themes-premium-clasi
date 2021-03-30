import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import {  Row, Col } from 'react-bootstrap';
import { EnvironmentOutlined, PlusOutlined } from '@ant-design/icons';
import { gsap } from 'gsap';

import { Section, Container } from '../../styled-components';

const TitleCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${props => props.theme.primaryColor};
`
const SubTitle = styled.p`
  font-size: 2.5rem;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
  text-align: center;
`
const SubTotle2 = styled.p`
font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
  text-align: center;
  @media(min-width: 768px){
    width: 30%;
  }
`
const TabContainer = styled.div`
  margin-top: 2rem;
  border-top: 2px solid rgb(213, 213, 213);
`
const TabButton = styled.button`
  width: 100%;
  padding: 3rem 0;
  font-size: 1rem;
  background-color: transparent;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
  border: none;
  border-bottom: 2px solid rgb(213, 213, 213);
  display: flex;
  justify-content: space-between;
  transition: 250ms ease;
  color: hsl(0, 0%, 43%);
  text-align: left;
  &:hover{
    color: hsl(0, 0%, 13%);
  }
`
const TabTitle = styled.span`

`
const TabDescription = styled.div`
  display: flex;
  //align-items: center;
  justify-content: space-between;
  width: 50%;
  user-select: none;
  pointer-events: none;
  position: relative;
  span{
    font-size: 2.5rem;
    position: absolute;
    right: 0;
  }
`
const Service = styled.div`
  opacity: 0;
  height: 0;
  padding-right: 4rem;
`

const DragCircle = styled.p`
  margin: 0;
  position: fixed;
  left:0;
  top:0;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3b3b3b;
  z-index: 100;
  user-select: none;
  pointer-events: none;
  opacity: 0;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
`

export default ()=> {
  const [open, setOpen] = useReducer((current, next) => ({ ...current, ...next }),{
    search: false,
    solution: false,
    variety: false,
  });

  const animationDrag = (e) => {
    gsap.to("#drag-service", {
      duration: 0.3,
      x: e.clientX ,
      y: e.clientY,
    });
  }

  const mouseEnter = (e) => {
    gsap.set("#drag-service", {
      opacity: 1,
    });
  }

  const mouseLeave = (e) => {
    gsap.set("#drag-service", {
      opacity: 0,
    });
  }

  const animationInfo = (id, open) => {
    const idIcon = "#" + id + "-icon";
    const idInfo = "#" + id + "-info";
    if(!open){
      gsap.to(idIcon, { rotate: 45 });
      gsap.to(idInfo, {
        height: "auto",
        opacity: 1 
      });
    } else {
      gsap.to(idIcon, { rotate: 0 });
      gsap.to(idInfo, {
        opacity: 0,
        height: 0, 
      });
    }
    console.log("ANIMATED INFO", idIcon);
  }

  useEffect(()=>{
    if(window !== "undefined"){
      let elm = document.getElementById("wrapper-service");
      elm.addEventListener("mousemove", animationDrag);
      elm.addEventListener("mouseenter", mouseEnter);
      elm.addEventListener("mouseleave", mouseLeave);
      return ()=> {
        elm.removeEventListener("mousemove", animationDrag);
        elm.removeEventListener("mouseenter", mouseEnter);
        elm.removeEventListener("mouseleave", mouseLeave);
      }
    }
  },[window]);

  return(
    <Section>
      <Container>
        <TitleCont>
        <Title>NUESTROS SERVICIOS</Title>
        <SubTitle>
          Por qué elegirnos
        </SubTitle>
        <SubTotle2>
          Somos un equipo multidisciplinario de especialistas enfocados en tus necesidades de vivienda.
        </SubTotle2>
        </TitleCont>
        <TabContainer id="wrapper-service">
          <DragCircle id="drag-service">Abrir</DragCircle>
          <TabButton
            id="search"
            onClick={e => setOpen({ [e.target.id]: !open[e.target.id] }, animationInfo(e.target.id, open[e.target.id]))}
          >
            <TabTitle>
              Eficiente
            </TabTitle>
            <TabDescription>
              <div>
                <h2>
                  Búsqueda eficiente
                </h2>
                <Service id="search-info" >
                  Aprendemos lo que necesitas para buscar tu próximo hogar como si fueras tu mismo.
                </Service>
              </div>
              <PlusOutlined id="search-icon" />
            </TabDescription>
          </TabButton>
          <TabButton
            id="solution"
            onClick={e => setOpen({ [e.target.id]: !open[e.target.id] }, animationInfo(e.target.id, open[e.target.id]))}
          >
            <TabTitle>
              Eficaz
            </TabTitle>
            <TabDescription>
              <div>
                <h2>
                  Soluciones eficaces
                </h2>
                <Service id="solution-info">
                  Negociamos por ti para que siempre tengas el mejor precio.
                </Service>
              </div>
              <PlusOutlined id="solution-icon" />
            </TabDescription>
          </TabButton>
          <TabButton
            id="variety"
            onClick={e => setOpen({ [e.target.id]: !open[e.target.id] }, animationInfo(e.target.id, open[e.target.id]))}
          >
            <TabTitle>
              Variedad
            </TabTitle>
            <TabDescription>
              <div>
                <h2>
                  Variedad de servicios
                </h2>
                <Service id="variety-info" >
                  Compra, venta, arriendo, tasaciones nosotros te ayudaremos con lo que necesites y hagas realidad la compra o venta de tu casa.
                </Service>
              </div>
              <PlusOutlined id="variety-icon" />
            </TabDescription>
          </TabButton>                 
        </TabContainer>
      </Container>
    </Section>
  )
}



















/*import ServiceCarousel from '../carousels/services';
import ReviewsCarousel from '../carousels/reviews';
import { ClasiQuote } from '../../icons';

const Title = styled.h2`
  color: ${props => props.theme.primaryColor};
`
const SubTitle = styled.p`
  font-weight: bold;
  margin: 3rem 0;
`

const Services = styled.div`
  margin-bottom: 4rem;
  @media(min-width: 768px){
    margin-bottom: 0;
  }
`
const Reviews = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Quote = styled.p`
  color: ${props => props.theme.primaryColor};
  font-size: 4rem;
  margin: 4rem 0;
  //margin-top: auto;
  //justify-self: center;
`


export default ()=>{

  return(
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Title>Ofrecemos un servicio ajustado a las necesidades de cada cliente</Title>  
            <SubTitle>Estas son algunas de las cosas que podemos hacer por vos:</SubTitle>     
            <Services>
              <ServiceCarousel />
            </Services>
          </Col>
          <Col xs={12} md={6}>
            <Reviews>
              <Quote>
                <ClasiQuote />
              </Quote>              
              <ReviewsCarousel />
            </Reviews>
          </Col>       
        </Row>
      </Container>
    </Section>
  )
}*/