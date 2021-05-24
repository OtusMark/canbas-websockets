import React, {KeyboardEvent, MouseEvent, useEffect, useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {InfoBar} from './InfoBar'
import {ChatInterface} from './ChatInterface'
import {Messages} from './Messages'
import styled from 'styled-components/macro'
import {Container} from '../styles/layout/Container'
import {addMessage, MessageT} from '../bll/chat-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {StateType} from '../bll/store'

let socket: ReturnType<typeof io>

export const Chat: React.FC<PropsT> = props => {

    const {
        location
    } = props

    const messages = useSelector<StateType, Array<MessageT>>(state => state.chat.messages)
    const dispatch = useDispatch()

    const ENDPOINT = process.env.ENDPOINT || 'localhost:5000'

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')

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
        socket.on('message', (message: MessageT) => {
            dispatch(addMessage(message.user, message.text))
            // setMessages([...messages, message])
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
    location: any //!I! change any
}