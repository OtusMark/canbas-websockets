import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 60%;
  width: 35%;
  
  background: ${({theme}) => theme.color.white};
`