import React, {ChangeEvent, useState} from 'react'
import styled from 'styled-components/macro'
import {Button} from '../styles/uiElements/Button'
import {useDispatch} from 'react-redux'
import {joinChat} from '../bll/chat-reducer'

export const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const dispatch = useDispatch()

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onChangeRoom = (event: ChangeEvent<HTMLInputElement>) => {
        setRoom(event.target.value)
    }

    const onClickJoin = () => {
        dispatch(joinChat(room, name))
    }

    return (
        <JoinWrapper>
            <JoinInner>
                <Heading>Join</Heading>
                <div>
                    <JoinInput placeholder='Name' type='text' onChange={onChangeName}/>
                </div>
                <div>
                    <JoinInput placeholder='Room' type='text' onChange={onChangeRoom}/>
                </div>
                    <Button onClick={onClickJoin}>Join chat</Button>
            </JoinInner>
        </JoinWrapper>
    )
}

// Styles
const JoinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100vh;

  text-align: center;
`

const JoinInner = styled.div`
  width: 20%;
  
  @media (max-width: ${({theme}) => theme.mediaQuery.tabletMax}) {
    width: 50%;
  }

  @media (max-width: ${({theme}) => theme.mediaQuery.mobileMax}) {
    width: 80%;
  }
`

const Heading = styled.h1`
  padding-bottom: .8rem;
`

const JoinInput = styled.input`
  margin-bottom: 1rem;
  padding: 1rem 1.2rem;
  
  width: 100%;
  
  border: none;
`