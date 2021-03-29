import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';

import Link from "../components/link";
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
          <Link to="/" >
            <Logo dark={dark} light={!dark} />
          </Link>
          <NavList horizontal>
            <NavItem>
              <Link to="/" >                
                Inicio                
              </Link>
              <Line />            
            </NavItem>            
            <NavItem>
              <Link to="/properties" >
                Propiedades
              </Link>    
              <Line />                    
            </NavItem>
            <NavItem>
              <Link to="/about" >
                Nosotros
              </Link>            
              <Line />            
            </NavItem>
          </NavList>
        <Link to="/contact" >
          <NavButton>Contacto</NavButton>
        </Link>          
        </Navigation>
      </Container>
    </Header>    
  )
}