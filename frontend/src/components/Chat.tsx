import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {InfoBar} from './InfoBar'
import {ChatInput} from './ChatInput'

let socket: ReturnType<typeof io>

export const Chat: React.FC<PropsT> = props => {

    const {
        location
    } = props

    const ENDPOINT = process.env.ENDPOINT || 'localhost:5000'

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<Array<string>>([])

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)

        socket = io(ENDPOINT, {transports: ['websocket']})

        console.log(socket)

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

    const sendMessage = (event: KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault()

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    const onKeyPressInput = (event: KeyboardEvent<HTMLInputElement>) => {
        return event.key === 'Enter' ? sendMessage(event) : null
    }

    return (
        <div>
            <div>
                <InfoBar room={room}/>
                <ChatInput message={message} onChangeInput={onChangeInput} onKeyPressInput={onKeyPressInput}/>
            </div>
        </div>

    )
}

// Types
type PropsT = {
    location: any //!I! change any
}