import React, {KeyboardEvent, MouseEvent, useEffect, useState} from 'react'
import io from 'socket.io-client'
import {InfoBar} from './InfoBar'
import {ChatInterface} from './ChatInterface'
import {Messages} from './Messages'
import styled from 'styled-components/macro'
import {Container} from '../styles/layout/Container'
import {addMessage, joinChat, MessageT} from '../bll/chat-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateT} from '../bll/store'

let socket: ReturnType<typeof io>

export const Chat: React.FC<PropsT> = props => {

    const {
        room,
        name
    } = props

    const dispatch = useDispatch()

    const messages = useSelector<AppRootStateT, Array<MessageT>>(state => state.chat.messages)

    const ENDPOINT = process.env.ENDPOINT || 'localhost:5000'

    const [message, setMessage] = useState('')

    useEffect(() => {

        socket = io(ENDPOINT, {transports: ['websocket']})

        socket.emit('join', {name, room}, () => {})

        return () => {
            socket.emit('disconnectChat')

            socket.off()
        }
    }, [ENDPOINT, room, name])

    useEffect(() => {
        socket.on('message', (message: MessageT) => {
            dispatch(addMessage(message.user, message.text))
        })
    }, [])

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
    room: string,
    name: string
}