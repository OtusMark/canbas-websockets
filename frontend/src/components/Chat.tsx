import React, {KeyboardEvent, MouseEvent, useCallback, useEffect, useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {InfoBar} from './InfoBar'
import {ChatInterface} from './ChatInterface'
import {Messages} from './Messages'
import styled from 'styled-components/macro'
import {Container} from '../styles/layout/Container'

let socket: ReturnType<typeof io>

export const Chat: React.FC<PropsT> = props => {

    const {
        location
    } = props

    const ENDPOINT = process.env.ENDPOINT || 'localhost:5000'

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<Array<MessageT>>([])

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT, {transports: ['websocket']})

        setName(name as string)
        setRoom(room as string)

        socket.emit('join', {name, room}, () => {

        })

        return () => {
            socket.emit('disconnectChat')

            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages])

    const sendMessage = (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <ChatWrapper>
            <Container>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <ChatInterface message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </Container>
        </ChatWrapper>

    )
}

// Styles
const ChatWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

// Types
type PropsT = {
    location: any //!I! change any
}

export type MessageT = {
    user: string
    text: string
}