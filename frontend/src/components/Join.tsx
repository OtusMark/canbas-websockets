import React, {ChangeEvent, MouseEvent, useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components/macro'
import { Button } from '../styles/uiElements/Button'

export const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onChangeRoom = (event: ChangeEvent<HTMLInputElement>) => {
        setRoom(event.target.value)
    }

    const onClickLink = (event: MouseEvent<HTMLAnchorElement>) => {
        return (!name || !room) ? event.preventDefault() : null
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
                <Link onClick={onClickLink} to={`/chat?name=${name}&room=${room}`}>
                    <Button type='submit'>Sign In</Button>
                </Link>
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