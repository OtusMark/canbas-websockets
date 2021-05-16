import styled from "styled-components/macro";

export const BarMain = styled.div`
  position: absolute;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0 1rem;
  
  width: 100%;
  height: ${({theme}) => theme.variable.barHeight};
  
  border: 1px solid ${({theme}) => theme.color.grey['700']};
  border-top: none;
  background-color: white;
`