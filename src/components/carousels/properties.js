import React, { useContext, useEffect } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { chunkArray, priceFormat, truncate } from '../../util';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { v1 as uuid } from 'uuid';
import Link from "../link";
import { Site, Surface, Parking, Bath, Rooms } from '../../icons';
import { gsap } from 'gsap';

import PropertyCard from '../cards/property';

const MainCont = styled.div`
  cursor: move;
`

const SliderCustom = styled(Slider)`
  padding-bottom: 1.5rem;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  position: absolute;
  top: .5rem;
  right: 4rem;
`
const ButtonBackCustom = styled(ButtonBack)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.5rem;
  transition: 250ms ease;
  border:none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 43%);
  //position: absolute;
  //top: 50%;
  //left: -1rem;
  &:hover{
    color: hsl(0, 0%, 13%);
  }
`
const ButtonNextCustom = styled(ButtonNext)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.5rem;
  transition: 250ms ease;
  border:none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 43%);
  //position: absolute;
  //top: 50%;
  //left: -1rem;
  &:hover{
    color: hsl(0, 0%, 13%);
  }
`
const LinkCustom = styled(Link)`
  color: inherit !important;
  display: block;
  overflow: hidden;
  transition: 250ms ease;
  cursor: move;
  &:hover{
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
  }
`
const Card = styled.div`
  width: 95%;
  transition: 250ms ease;
  &:hover{
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
  }
  @media(min-width: 768px){
    width: 100%;
  }
`
const Image = styled.div`
  width: 100%;
  padding-top: 60%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
  position: relative;
`
const CharsList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient( 67.2deg, rgba(165,90,240,.9) -7.5%, rgba(37,208,199,.9) 62.7% );
  opacity: 0;
  z-index: 5;
  transition: all 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
  padding: 0;
  margin: 0;
  padding: 1rem;
  span{
    margin-left: .5rem;
  }  
  ${Card}:hover & {
    opacity: 1;
  }
`
const CharItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: .3rem;
  color: #fff;
  //font-size: .8rem;
  .value{
    margin-left: .5rem;
  }
`
const TitleCont = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  min-height: 116px;
`
const Title = styled.p`
  margin: 0;
  font-family: 'Raleway', sans-serif !important;
  font-size: 1.5rem;
  font-weight: 700;
`
const Code = styled.p`
  margin: 0;
  font-size: .7rem;
  min-width: 102.7px;
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
  border: 1px solid #fff;
  color: #fff;
  z-index: 100;
  user-select: none;
  pointer-events: none;
  opacity: 0;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
`

const Property = ({
  mainImage,
  title,
  value,
  currency,
  code,
  ubication,
  characteristics,
  _id,
  operation
}) => {
  const state = useContext(context);
  return(
    <Link to={`/property?id=${_id}`}>
      <Card>
        <Image src={mainImage}>
          <CharsList>
            <CharItem>
              <Site />
              <span>
                {ubication.commune}
              </span>
            </CharItem>
            {
              characteristics.filter(char => (
                char.name === "Superficie total" ||
                char.name === "Superficie útil" ||
                char.name === "Habitaciones" ||
                char.name === "Baños" ||
                char.name === "Estacionamientos"

              ) ).map((char, index) => (
                <CharItem key={index}>
                  {
                    char.name === "Superficie total" && <Surface /> ||
                    char.name === "Superficie útil" && <Surface />  ||
                    char.name === "Habitaciones" && <Rooms /> ||
                    char.name === "Baños" && <Bath /> ||
                    char.name === "Estacionamientos" && <Parking />
                  }
                  <span>{char.name} {char.value} {char.name === "Superficie total" && "mt2" || char.name === "Superficie útil" && "mt2"}</span>
                </CharItem>
              ))
            }      
            <CharItem>
            {
              `${currency} ${currency === "UF" ? value : priceFormat(value)}`
            }                 
            </CharItem>     
          </CharsList>       
        </Image>
        <TitleCont>
          <Title>
            {
              truncate(title, 50)
            }
          </Title>
          <Code>
            {operation} - {code}
          </Code>
        </TitleCont>
      </Card>
    </Link>
  )
}

export default ()=>{
  const state = useContext(context);
  const items = state.featuredProperties;
  const chunkedItemsDesktop = chunkArray(items.map(item => item), 2);
  const chunkedItemsTablet = chunkArray(items.map(item => item), 3);

  const animationDrag = (e) => {
    gsap.to("#drag", {
      duration: 0.3,
      x: e.clientX ,
      y: e.clientY,
    });
  }

  const mouseEnter = (e) => {
    gsap.set("#drag", {
      opacity: 1,
    });
  }

  const mouseLeave = (e) => {
    gsap.set("#drag", {
      opacity: 0,
    });
  }

  useEffect(()=>{
    if(window !== "undefined"){
      let elm = document.getElementById("wrapper");
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
    <MainCont id="wrapper">
      <DragCircle id="drag">
        VER
      </DragCircle>
      <CarouselProvider
        naturalSlideWidth={100}
        //naturalSlideHeight={60}
        isIntrinsicHeight={true}
        totalSlides={items.length}
        visibleSlides={1}
        orientation="horizontal"       
        className="d-md-none d-lg-none d-xl-none" 
      >
          <SliderCustom>
            {
              items.map((item, index) => (
                <Slide key={item.id} index={index}>
                  <PropertyCard {...item} />
                </Slide>
              ))
            }
          </SliderCustom>
      </CarouselProvider>        
      <CarouselProvider
        naturalSlideWidth={100}
        //naturalSlideHeight={60}
        isIntrinsicHeight={true}
        totalSlides={chunkedItemsTablet.length}
        visibleSlides={1}
        orientation="horizontal"       
        className="d-none d-md-block d-lg-none" 
      >
        <SliderCustom>
          {
            chunkedItemsTablet.map((mainItem, index) => (
              <Slide key={uuid()} index={index}>
                <Row 
                  style={{ margin: "0 1rem" }}
                >
                  {
                    mainItem.map(item => (
                      <Col xs={1} md={4}>
                        <Property {...item} />
                      </Col>
                    ))
                  }
                </Row>
              </Slide>
            ))
          }
        </SliderCustom>
        <ButtonBackCustom>
          <ArrowLeftOutlined />
        </ButtonBackCustom>
        <ButtonNextCustom>
          <ArrowRightOutlined />
        </ButtonNextCustom>
      </CarouselProvider>            
      <CarouselProvider
        naturalSlideWidth={100}
        //naturalSlideHeight={60}
        isIntrinsicHeight={true}
        totalSlides={chunkedItemsDesktop.length}
        visibleSlides={1}
        orientation="horizontal"       
        className="d-none d-lg-block" 
      >
        <SliderCustom>
          {
            chunkedItemsDesktop.map((mainItem, index) => (
              <Slide key={uuid()} index={index}>
                <Row 
                  style={{ margin: "0 1rem" }}
                >
                  {
                    mainItem.map(item => (
                      <Col xs={1} md={6} className="p-5">
                        <Property {...item} />
                      </Col>
                    ))
                  }
                </Row>
              </Slide>
            ))
          }
        </SliderCustom>
        <ButtonContainer>
          <ButtonBackCustom>
            <ArrowLeftOutlined />
          </ButtonBackCustom>
          <ButtonNextCustom>
            <ArrowRightOutlined />
          </ButtonNextCustom>
        </ButtonContainer>
      </CarouselProvider>
    </MainCont>
  )
}