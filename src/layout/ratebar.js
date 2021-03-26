import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

import { Container } from '../styled-components';

const MainCont = styled.div`
  padding: 0;
  user-select: none;
  background-color: #f7f3f0;
  @media(min-width: 1350px){
    position: absolute;
    top: 45%;
    left: 0;
    transform-origin: 0 0;
    transform: rotate(-90deg);
  }
`
const RatesCont = styled.ul`
  list-style: none;
  padding: .5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  @media(min-width: 992px){
    font-weight: normal;
    justify-content: flex-end;
    //color: ${props => props.theme.primaryColor};
    margin: 0;
    font-size: .7rem;
  }
  @media(min-width: 1350px){
    justify-content: flex-start;
  }
`
const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: .5rem;
  margin-right: .5rem;
`
const RateItem = styled.li`
  margin-left: .5rem;
  font-size: .6rem;
  &::after{
    content: ""
  }
  @media(min-width: 768px){
    margin-left: 1rem;
    &::after{
      content:"" 
    } 
  }
`
const RateItemNoAfter = styled(RateItem)`
  &::after{
    content: ""
  }
  @media(min-width: 768px){
    &::after{
      content: ""
    } 
  }
`

export default ()=> {
  const [query, setQuery] = useReducer((current, next) => ({ ...current, ...next }), {
    data: null,
    error: false,
    loading: true,
  });

  const getData = async(url)=>{
    try{
      const data = await fetch(url);
      const result = await data.json();
      return result;
    }
    catch(e){
      console.log(e);
    }
  };

  const getAllData = async()=> {
    const localData = window.localStorage.getItem("indicators");
    const parsedData = localData ? JSON.parse(localData) : null;
    const today = new Date(Date.now());
    const lastDay = parsedData ? new Date(parsedData.date) : null;
    const requestApi = !localData || today.getDate() >= lastDay.getDate() + 1;
    if(requestApi){
      try{
        const urls = ["https://mindicador.cl/api/uf", "https://mindicador.cl/api/utm", "https://mindicador.cl/api/dolar"];
        const data = await Promise.all(urls.map(url => getData(url)));
        const indicators = {
          date: Date.now(),
          uf: data[0].serie[0].valor,
          utm: data[1].serie[0].valor,
          dollar: data[2].serie[0].valor,
        };
  
        console.log("ALL DATA RATE TODAY", indicators);
        window.localStorage.setItem("indicators", JSON.stringify(indicators));
        setQuery({ loading: false, error: false, data: indicators });
      }
      catch(e){
        console.log(e);
        setQuery({ loading: false, error: true, data: null });
      }
    }
    else{
      setQuery({ loading: false, error: false, data: JSON.parse(localData) });
    }
  };

  useEffect(()=>{
    if(window !== "undefined"){
      getAllData();
    }
  },[]);

  if(query.loading) return(
    <MainCont>
      <Container>
        <RatesCont>
          <RateItem>
            <Icon>UF</Icon>
            <span><LoadingOutlined /></span>
          </RateItem>
          <RateItem>
            <Icon>UTM</Icon>
            <span><LoadingOutlined /></span>
          </RateItem>
          <RateItemNoAfter>
            <Icon>$</Icon>
            <span><LoadingOutlined /></span>
          </RateItemNoAfter>                    
        </RatesCont>
      </Container>
    </MainCont>
  );

  if(query.error) return <span>error de conexión</span>

  return(
    <MainCont>
      <Container>
        <RatesCont>
          <RateItem>
            <Icon>UF</Icon>
            ${query.data.uf}
          </RateItem>
          <RateItem>
            <Icon>UTM</Icon>
            ${query.data.utm}
          </RateItem>
          <RateItemNoAfter>
            <Icon>$</Icon>
            ${query.data.dollar}
          </RateItemNoAfter>                    
        </RatesCont>
      </Container>
    </MainCont>
  )
}