import React from 'react'
import styled from 'styled-components/macro'
import {ReactComponent as CloseIcon} from '../assets/svg/close.svg'
import {useDispatch} from 'react-redux'
import {quitChat} from '../bll/chat-reducer'

export const InfoBar: React.FC<PropsT> = props => {

    const dispatch = useDispatch()

    const {
        room
    } = props

    const onClickQuitChat = () => {
        dispatch(quitChat())
    }

    return (
        <InfoBarWrapper>
            <InfoBarInner>
                <h3>{room}</h3>
                <InfoBarCloseIcon onClick={onClickQuitChat}/>
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

  margin: 1.5rem 1.5rem;
`

const InfoBarCloseIcon = styled(CloseIcon)`
  width: 1rem;
  height: 1rem;
`

// Types
type PropsT = {
    room: string
}