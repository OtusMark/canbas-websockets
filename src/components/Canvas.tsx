import React from 'react';
import styled from "styled-components/macro";

export const Canvas = () => {
    return (
        <CanvasMain>
            <StyledCanvas width={700} height={500}/>
        </CanvasMain>
    );
};

// Styles
const CanvasMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`

const StyledCanvas = styled.canvas`
  border: 1px solid ${({theme}) => theme.color.grey['800']};
  background-color: ${({theme}) => theme.color.white};
`
