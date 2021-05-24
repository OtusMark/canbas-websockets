import React from 'react'
import styled from 'styled-components/macro'
import {ReactComponent as CloseIcon} from '../assets/svg/close.svg'

export const InfoBar: React.FC<PropsT> = props => {

    const {
        room
    } = props

    return (
        <InfoBarWrapper>
            <InfoBarInner>
                <h3>{room}</h3>
                <a href='/'><InfoBarCloseIcon/></a>
            </InfoBarInner>
        </InfoBarWrapper>
    )
}

// Styles
const InfoBarWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 4rem;
  width: 100%;

  background: ${({theme}) => theme.color.primary.main};
`

const InfoBarInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 0 1.5rem;
`

const InfoBarCloseIcon = styled(CloseIcon)`
  width: 1rem;
  height: 1rem;
`

// Types
type PropsT = {
    room: string
}