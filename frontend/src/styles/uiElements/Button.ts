import styled from 'styled-components/macro'

export const Button = styled.button`
  display: inline-block;

  padding: 1rem;

  width: 100%;

  text-transform: uppercase;
  background: ${({theme}) => theme.color.primary.main};
  border: none;
`