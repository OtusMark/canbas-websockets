import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styled from "styled-components/macro";
import {Input} from "./components/Input";
import {io} from "socket.io-client";

export const App = () => {
    const [state, setState] = useState<MessageT>({name: '', message: ''})
    const [chat, setChat] = useState<Array<MessageT>>([])

    const socketRef = useRef<any>() // Remove any

    useEffect(() => {
        socketRef.current = io('http://localhost:4000')
        socketRef.current.on('message', ({name, message}: MessageT) => {
            setChat([...chat, {name, message}])
        })
        return () => socketRef.current.disconnect()
    }, [chat])

    const onMessageSubmit = (event: FormEvent<HTMLFormElement>) => {
        const {name, message}: MessageT = state
        socketRef.current.emit("message", {name, message})
        event.preventDefault()
        setState({message: "", name})
    }

    const onTextChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const renderChat = () => {
        return chat.map(({name, message}, index) => (
            <div key={index}>
                <h3>
                    {name}: <span>{message}</span>
                </h3>
            </div>
        ))
    }

    return (
        <StyledMain>
            <Chat>
                <form onSubmit={onMessageSubmit}>
                    <h1>Messenger</h1>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Input name="name"
                               value={state.name}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => onTextChange(e)}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <Input isTextarea
                               name="message"
                               value={state.message}
                               onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onTextChange(e)}/>
                    </div>
                    <button>Send Message</button>
                </form>
            </Chat>
            <div>
                <h2>Chat log</h2>
                {renderChat()}
            </div>
        </StyledMain>
    )
}

// Styles
const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background-color: ${({theme}) => theme.color.grey['300']};
`

const Chat = styled.div`
  width: 50%;
  height: 50%;
  background-color: ${({theme}) => theme.color.white};
`

// Types
type MessageT = {
    name: string
    message: string
}
