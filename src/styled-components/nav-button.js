import styled from 'styled-components';

export default styled.span`
  font-family: "Roslindale";
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 50px;
  color: ${props => props.theme.primaryColor};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  line-height: 1.1;
  padding: 0.9375rem 1.875rem;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
  
  &:hover{
    background-color: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
    color: #fff;    
  }
`