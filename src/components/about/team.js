import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { v1 as uuid } from 'uuid';
import { gsap } from 'gsap';

import { Section, Container } from '../../styled-components';

const SectionCustom = styled(Section)`
  background-color: #1f1f1f;
  margin: 0;
  padding: 6rem 0;
`

const Title = styled.h2`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 4rem;
  text-transform: uppercase;
`
const Card = styled.div`
  width: 100%;
`
const Avatar = styled.div`
  width: 100%;
  padding-bottom: 75%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: top;
  position: relative;
`
const InfoCont = styled.div`
  background-color: #fff;
  padding: 1rem;
`
const Name = styled.p`
  margin: 0;
  font-size: 2rem;
  font-family: 'Raleway', sans-serif !important;
  font-weight: 300;
`
const InfoList = styled.ul`
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  z-index: 5;
  background-color: #fff;
  transition: 250ms;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  li{
    padding: 0 1rem;
  }
  .contact{
    color: ${props => props.theme.primaryColor};
    margin: 0;
  }
`
const NoAvatar = styled.div`
  width: 160px;
  height: 160px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  user-select: none;
  span{
    font-size: .6rem;
  }
  //color: #fff;
`
const Position = styled.p`
  text-transform: uppercase;
  font-size: .8rem;
  margin: 1rem 0;
`
const Resume = styled.p`
  margin: 2rem 0;
  text-align: center;
  flex: 1;
`
const User = ({ avatar, cv, email, fullName, phone, id }) => {
  return(
    <Card
      onMouseEnter={()=> gsap.to(`#${id}`, { height: "100%", duration: .3 , ease: "linear" })}
      onMouseLeave={()=> gsap.to(`#${id}`, { height: 0, duration: .3, ease: "linear" })}
    >
      <InfoCont>
        <Name>
          {fullName}
        </Name>
        <Position>
          agente
        </Position>
      </InfoCont>
      <Avatar src={avatar}>
        <InfoList id={id}>
          <li>
            {cv}
          </li>
          <li >
            <p className="contact">
              {email}
            </p>
            <span className="contact">
              {phone}
            </span>
          </li>
        </InfoList>
      </Avatar>
    </Card>
  )
}

/*const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-between;
  height: 100%;
  padding-bottom: 3rem;
  @media(min-width: 768px){
    padding: 0;
  }
`
const Avatar = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 2rem;
`
const NoAvatar = styled.div`
  width: 160px;
  height: 160px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  user-select: none;
  span{
    font-size: .6rem;
  }
  //color: #fff;
`
const Info = styled.p`
  margin: 0;
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
`
const Resume = styled.p`
  margin: 2rem 0;
  text-align: center;
  flex: 1;
`
const User = ({ avatar, cv, email, fullName, phone }) => (
  <Card>
    {
      avatar
      ?<Avatar src={avatar} alt={fullName} />
      :<NoAvatar>{fullName}<span>Sin avatar</span></NoAvatar>
    }
    <Info>{fullName}</Info>
    <Resume>
      {cv}
    </Resume>
    <Info>{email}</Info>
    <Info>{phone}</Info>
  </Card>
)*/

export default ()=> {
  const state = useContext(context);
  return(
    <SectionCustom>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              Quienes somos
            </Title>
          </Col>
          {
            state.about.team.items.map(item => (
              <Col key={uuid()} xs={12} md={4}>
                <User {...item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </SectionCustom>
  )
}