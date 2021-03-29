import styled from 'styled-components';

export default styled.button`
    min-width: ${props => props.block ? "100%" : "160px"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.primary ? props.theme.primaryColor : "#fff"};
    background-color: ${props => props.outlined ? "transparent" : props.theme.primaryColor};    
    color: ${props => props.outlined && props.primary ? props.theme.primaryColor : "#fff"};
    border-radius: 50px;
    transition: all 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
    margin-bottom: 1rem;
    line-height: 1.1;
    padding: 0.9375rem 1.875rem;
    cursor: pointer;
    &:hover{
      background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor: "#fff"};
      color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
      filter: brightness(1.1);
    }
    &:disabled      {
      background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor: "#fff"};
      color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
      filter: brightness(1.1);
      cursor: progress;
    }
`