import React, { useEffect, useState, useRef, useContext, useCallback } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { gsap }  from 'gsap';
import { Draggable } from "gsap/Draggable";
//import {  } from 'react-bootstrap';

const CarouselContainer = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
`
const CarouselDisplay = styled.div`
  height: 100%;

  .item{
    width: 33%;
    height: 50vh;
    position: absolute;
    border-left: 3px solid black;
    border-right: 3px solid black;
    background: grey;
    font-size: 38px;
    color: white;
    font-style: bold;
    text-align: center;
  }  
`

export default ()=> {
  const wrapperRef = useRef(null);
  const itemsRef = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const carouselData = useContext(context).featuredProperties;
  const [itemHeight, setItemHeight] = React.useState(0);
  
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setItemHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const addToRefs = useCallback((el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  }, []);

  const animation = (carouselItems, width) => {
    return (
      carouselItems.length > 0 &&
      gsap
        .to(carouselItems, {
          duration: 1,
          x: () => {
            return `+=${width}`;
          },
          paused: true,
          ease: "linear",
          overwrite: true,
          repeat: -1,
          modifiers: {
            x: (x) => {
              x = parseFloat(x) % width;
              return `${x}px`;
            }
          }
        })
        .progress(1 / carouselItems.length)
    );
  };

  const carouselAnimation = () => {
    const carouselItems = itemsRef.current;
    let carouselWidth, carouselLength, snapBox;

    if (carouselItems.length > 0) {
      carouselLength = itemsRef.current.length;
      carouselWidth = itemsRef.current[0].clientWidth * carouselLength;
      snapBox = gsap.utils.snap(itemsRef.current[0].clientWidth);

      carouselItems.forEach((elm, i) => {
        gsap.set(elm, {
          x: i * itemsRef.current[0].clientWidth,
          left: -itemsRef.current[0].clientWidth
        });
      });

      gsap.set("#wrapper", { height: itemHeight });
    }

    const wrapProgress = gsap.utils.wrap(0, 1);
    const proxy = document.createElement("div");
    const timeLine = animation(carouselItems, carouselWidth);

    Draggable.create(proxy, {
      trigger: "#elm",
      throwProps: true,
      isThrowing: true,
      dragResistance: 0.55,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      dragClickables: true,
      snap: {
        x: snapBox
      }
    });

    function updateProgress() {
      if (timeLine)
        timeLine.progress(
          wrapProgress(gsap.getProperty(proxy, "x") / carouselWidth)
        );
    }
  };

  useEffect(() => {
    gsap.registerPlugin(Draggable);
  }, [])

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      handleWindowResize();
      carouselAnimation();
    });
    carouselAnimation();
  }, [carouselData, windowWidth]);

  return(
    <CarouselContainer ref={wrapperRef}>
      <CarouselDisplay ref={measuredRef}>
        {carouselData && carouselData.map((item, i) => {
            return (
              <div
                key="item"
                id="elm"
                className="item"
                ref={addToRefs}
              >
                {i}
              </div>
            );
          })}
      </CarouselDisplay>
    </CarouselContainer>
  )
}