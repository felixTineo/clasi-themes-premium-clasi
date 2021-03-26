import React, { useEffect } from "react"
import styled from 'styled-components';
import { gsap } from 'gsap';

const MainCont = styled.div`

`
const Image = styled.img`
  width: 250px;
  object-fit: cover;
  object-position: center;
`

export default ()=> {
  useEffect(()=>{
    const tl = gsap.timeline();
    tl.from("#logo", { opacity: 0, duration: 2 })
      .from("#logo", { y: 30, duration: 2, ease: "back.out(1.7)" }, "-=2")
      .from("#logo", { filter: "grayscale(100%)", duration: 2,  repeat: -1, yoyo: true }, "-=2");
  },[]);

  return(
    <MainCont id="logo">
      <Image src={require("../images/icon.png")} />
    </MainCont>
  )
}

/*import React, { useEffect } from "react"
import styled from 'styled-components';
import { gsap } from 'gsap';

const MainCont = styled.div`

`
const Video = styled.video`
  width: 426px;
  height: 240px;
  clip-path: url(#clip-00);
`
const Svg = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
`

export default () => {
  useEffect(()=>{
    const tl = gsap.timeline();
    tl.from("#logo", { opacity: 0, duration: 2 })
      .from("#logo", { y: 30, duration: 2, ease: "back.out(1.7)" }, "-=2");
  },[]);

  return(
    <MainCont>
      <Video loop autoPlay muted playsInline id="logo">
        <source src={require("../videos/kitchen.mp4")} type="video/mp4" />
      </Video>
      <Svg>
        <defs>
          <clipPath id="clip-00" clipPathUnits="objectBoundingBox" transform="scale(0.002347418, 0.004166667)">
            <path d="m213.826 0.015674c-12.55-0.50192-23.057 11.133-22.967 22.993 0.74547 23.032-21.036 43.76-44.001 41.821-15.423 1.2487-26.112 20.002-18.159 33.67 6.9428 13.848 28.78 16.404 38.109 3.6547 8.4906-10.373 2.3589-25.26 11.034-35.919 7.7035-13.019 22.896-21.184 37.764-20.534 15.145-0.6091 25.843-18.372 19.043-31.908-3.7316-7.8927-11.988-13.706-20.822-13.778zm0.02453 64.689c-12.55-0.50192-23.057 11.133-22.967 22.993 0.74548 23.032-21.036 43.76-44.001 41.821-15.1 1.2439-25.848 19.338-18.496 32.98 4.9539 11.338 18.065 13.078 28.689 13.445 19.903 3.751 35.345 23.345 33.874 43.632 0.97925 16.574 22.243 26.087 35.574 16.755 11.429-6.7276 9.2658-20.442 11.869-31.342 5.3401-17.841 23.632-30.773 42.008-29.827 15.145-0.60908 25.844-18.372 19.043-31.908-5.518-12.69-22.888-18.152-34.197-9.5718-10.682 6.9586-8.7185 20.067-11.207 30.64-5.9422 20.768-29.204 34.618-50.236 28.873-21.152-4.932-35.867-27.767-31.194-49.024 3.735-19.711 23.247-34.852 43.021-33.783 15.145-0.6091 25.843-18.372 19.043-31.908-3.7316-7.8927-11.988-13.706-20.822-13.778zm64.797 0.12269c-12.55-0.50189-23.057 11.133-22.967 22.993 0.74547 23.032-21.036 43.76-44.001 41.821-15.423 1.2488-26.112 20.002-18.159 33.67 6.9428 13.848 28.78 16.404 38.109 3.6547 8.4906-10.373 2.3588-25.26 11.034-35.919 7.7035-13.019 22.896-21.184 37.764-20.534 15.145-0.6091 25.844-18.372 19.043-31.908-3.7316-7.8927-11.988-13.706-20.822-13.778zm-106.82 87.549c0.14929 0.0208-0.10304 0.20071 0 0z"/>
          </clipPath>
        </defs>
      </Svg>      
    </MainCont>
  )
}
*/