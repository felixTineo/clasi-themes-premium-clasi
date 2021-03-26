import React, { useContext, useState, useEffect, Fragment } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { SearchOutlined, SlidersOutlined, UpOutlined, DownOutlined, CheckOutlined } from '@ant-design/icons';
import { gsap } from 'gsap';

import { useUrlForm } from '../../hooks';
import { Autocomplete, Select, Input } from '../inputs';
import PROPERTY_TYPE from '../../constants/PROPERTY_TYPE.json';
import COMMUNES from '../../constants/CITIES.json';
import { Button } from '../../styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Form = styled.form`
  padding: 0;
  margin-top: 1rem;
  @media(min-width: 768px){    
    margin-top: 0;
  }
`
const FormInnerCont = styled.div` 
    margin-bottom: ${props => props.first ? "2rem" : "0" };
    padding: 0 1rem;
    padding-right: 0;
  @media(min-width: 768px){
    background-color: #fff;
    border-radius: 28px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .12), 0px 2px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12), 0px 16px 16px rgba(0, 0, 0, .12);
  }
`
const ButtonCustom = styled(Button)`
  min-height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  background-color: #fff;
  color: ${props => props.theme.primaryColor};
  font-size: 1.5rem;
  box-shadow: none !important;
  border: none;
  border-left: 1px solid ${props => props.theme.primaryColor};
`
const MoreFilterCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const FilterButton = styled.button`
  border: none;
  background-color: transparent;
  display :flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: 250ms ease;
  font-size: .8rem;
  &:hover{
    filter: brightness(1.1);
  } 
`

export default ({ withFilters, id })=> {
  const state = useContext(context);
  const [filter, setFilter] = useState(false);
  const [byCode, setByCode] = useState("");
  const { values, onChange, getUrl, setValues } = useUrlForm({
    propertyType: '',
    operation: '',
    commune: '',
    stringSearch: '',
    priceMin: '',
    priceMax: '',
    totalAreaFrom: '',
    totalAreaTo: '',    
    bedrooms: '',
    bathrooms: '',
    currency: 'CLP',    
  });

  const handleFilter = ()=> {
    setValues({
      priceMin: '',
      priceMax: '',
      totalAreaFrom: '',
      totalAreaTo: '',    
      bedrooms: '',
      bathrooms: '',
      currency: 'CLP',          
    });
    setFilter(!filter);
  }

  useEffect(()=>{
    if(filter){
      gsap.from("#filters", { opacity: 0, y: 10, duration: .5, ease:"back.out(1.7)" });
    }
  },[filter])

  return(
    <Form
      id={id}
      onSubmit={(e)=> e.preventDefault()}
      withFilters={withFilters}
    >
      <FormInnerCont first={withFilters}>
      <Row noGutters>
        <Col xs={12} md={3}>
          <Select
            onChange={e => setByCode(e.target.value)}
            default="Buscar por"
            options={["Propiedad", "Código"]}
            value={byCode}
            primary
            capitalize
            noAll
          />           
        </Col>        
        {
          byCode === "Código"
          ? (
            <Col xs={12} md={9}>
              <Autocomplete
                id="stringSearch"
                onSelect={onChange}
                selected={values.commune}
                placeholder="Ingrese el código de la propiedad"
                icon
              />          
            </Col> 
          )
          :(
            <Fragment>
              <Col xs={12} md={3}>
                <Select
                  id="propertyType"
                  onChange={onChange}
                  value={values.propertyType}
                  default={byCode === "Propiedad" ? "Tipo" : "Propiedad"}
                  options={PROPERTY_TYPE}
                  primary
                  capitalize
                />           
              </Col>
              <Col xs={12} md={2}>
                <Select
                  id="operation"
                  onChange={onChange}        
                  value={values.operation}          
                  default="Operación"
                  options={["VENTA", "ARRIENDO"]}
                  primary
                  capitalize
                />          
              </Col>
              <Col xs={12} md={3}>
                <Autocomplete
                  id="commune"
                  onSelect={onChange}
                  selected={values.commune}
                  options={COMMUNES.map(val => val.name)}
                  placeholder="Comuna"
                />          
              </Col>      
              <Col xs={12} md={1}>
                <AniLink fade to={getUrl()} duration={.5}>
                  <ButtonCustom
                    block
                    primary
                    type="submit"
                    title="Buscar"
                    className="d-none d-md-block"
                  >
                    <span className="d-xs-block d-md-none">Buscar</span>
                    <SearchOutlined className="d-none d-md-block" />
                  </ButtonCustom>
                </AniLink>
                <AniLink fade to={getUrl()} duration={.5}>
                  <Button
                    block
                    primary
                    type="submit"
                    title="Buscar"
                    className="d-md-none"
                  >
                    <span className="d-xs-block d-md-none">Buscar</span>
                    <SearchOutlined className="d-none d-md-block" />
                  </Button>
                </AniLink>                
              </Col>
            </Fragment>
          )
        }        
      </Row>
      </FormInnerCont>
      {
        withFilters && filter && (
          <FormInnerCont first id="filters">
            <Row noGutters>
              <Col xs={12} md={3}>
                <Input
                  id="totalAreaFrom"
                  onChange={onChange}
                  value={values.totalAreaFrom}
                  placeholder="Superficie desde m²"
                  primary
                  type="number"
                  min={0}
                >
                </Input>
              </Col>
              <Col xs={12} md={3}>
                <Input
                  id="totalAreaTo"
                  onChange={onChange}
                  value={values.totalAreaTo}
                  placeholder="Superficie hasta m²"
                  primary
                  type="number"
                  min={0}
                >
                </Input>
              </Col>   
              <Col xs={12} md={2}>
                <Input
                  id="priceMin"
                  onChange={onChange}
                  value={values.priceMin}
                  placeholder="Precio desde"
                  primary
                  type="number"
                  min={0}
                >
                </Input>
              </Col>
              <Col xs={12} md={2}>
                <Input
                  id="priceMax"
                  onChange={onChange}
                  value={values.priceMax}
                  placeholder="Precio hasta"
                  primary
                  type="number"
                  min={0}
                >
                </Input>
              </Col>        
              <Col xs={12} md={1}>
                <Select
                  id="currency"
                  onChange={onChange}
                  value={values.currency}
                  default="Propiedad"
                  options={["CLP", "UF"]}
                  primary
                  noAll
                />           
              </Col>   
              <Col xs={12} md={1}>
                <AniLink fade to={getUrl()} duration={.5}>
                  <ButtonCustom
                      block
                      primary
                      type="submit"
                      title="Buscar"
                      className="d-none d-md-block"
                    >
                    <span className="d-xs-block d-md-none">Aplicar</span>
                    <CheckOutlined className="d-none d-md-block" />
                  </ButtonCustom>
                </AniLink>
              </Col>                              
            </Row>
          </FormInnerCont>
        )
      }
      <MoreFilterCont>
        {
          withFilters && (
            <FilterButton>
              {
                filter
                ? (
                  <FilterButton onClick={handleFilter}>
                    Menos filtros                
                    <UpOutlined style={{ marginLeft: ".3rem" }} />
                  </FilterButton>
                )
                : (
                  <FilterButton onClick={handleFilter}>
                    Más filtros
                    <DownOutlined style={{ marginLeft: ".3rem" }} />
                  </FilterButton>
                )
              }
            </FilterButton>            
          )
        }
      </MoreFilterCont>
    </Form>
  )
}