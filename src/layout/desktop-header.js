import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import RateBar from './ratebar';
import Logo from './logo';
import { NavLink, NavButton, Container } from '../styled-components';

const Header = styled.header`
  background-color: #f7f3f0;
`
const Navigation = styled.nav`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f3f0;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`
const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-left: ${props => props.first ? "0" : "2rem"};
`
const Line = styled.div`
  height: 3px;
  background-image: linear-gradient( 67.2deg, rgba(165,90,240,1) -7.5%, rgba(37,208,199,1) 62.7% );
  width: 0;
  position: absolute;
  bottom: 0;
  transition: all 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
  ${NavItem}:hover & {
    width: 100%;
  }
`

export default ({ dark })=> {
  const state = useContext(context);

  return(
    <Header className="d-none d-lg-block">
      <RateBar />
      <Container>
        <Navigation>
          <AniLink paintDrip hex={state.primaryColor} to="/" duration={.5}>
            <Logo dark={dark} light={!dark} />
          </AniLink>
          <NavList horizontal>
            <NavItem>
              <AniLink paintDrip hex={state.primaryColor} to="/properties" duration={.5}>
                
                  Inicio
                
              </AniLink>
              <Line />            
            </NavItem>            
            <NavItem>
              <AniLink paintDrip hex={state.primaryColor} to="/properties" duration={.5}>
                  Propiedades
              </AniLink>    
              <Line />                    
            </NavItem>
            <NavItem>
              <AniLink paintDrip hex={state.primaryColor} to="/about" duration={.5}>
                  Nosotros
              </AniLink>            
              <Line />            
            </NavItem>
          </NavList>
        <AniLink paintDrip hex={state.primaryColor} to="/contact" duration={.5}>
          <NavButton>Contacto</NavButton>
        </AniLink>          
        </Navigation>
      </Container>
    </Header>    
  )
}