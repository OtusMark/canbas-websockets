import React from 'react';
import styled from "styled-components/macro";
import {ToolBar} from "./components/ToolBar";
import {SettingsBar} from "./components/SettingsBar";
import {Canvas} from "./components/Canvas";

export const App = () => {
    return (
        <StyledMain>
            <ToolBar/>
            <SettingsBar/>
            <Canvas/>
        </StyledMain>
    )
}

// Styles
const StyledMain = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${({theme}) => theme.color.grey['500']};
`
