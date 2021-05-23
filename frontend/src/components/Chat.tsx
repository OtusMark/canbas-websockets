import React, {ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {InfoBar} from './InfoBar'
import {ChatInput} from './ChatInput'
import {Messages} from './Messages'

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
            socket.emit('disconnect')

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

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <div>
            <div>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>

    )
}

// Types
type PropsT = {
    location: any //!I! change any
}

export type MessageT = {
    user: string
    text: string
}