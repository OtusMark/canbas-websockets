import React from 'react';
import {BarMain} from "../styles/components/Bar";
import styled from "styled-components/macro";

export const SettingsBar = () => {
    return (
        <StyledBarMain>

        </StyledBarMain>
    );
};

const StyledBarMain = styled(BarMain)`
  top: ${({theme}) => theme.variable.barHeight}
`