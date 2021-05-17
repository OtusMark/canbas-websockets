import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components/macro";
import {Input} from "./components/Input";
import {io, Socket} from "socket.io-client";

export const App = () => {
    const [message, setMessage] = useState<MessageT>({name: '', message: ''})
    const [chat, setChat] = useState<Array<MessageT>>([])

    const socketRef = useRef<any>() // Remove any

    useEffect(() => {
        socketRef.current = io('http://localhost:4000')
        socketRef.current.on("message", ({name, message}: MessageT) => {
            setChat([...chat, {name, message}])
        })
        return () => socketRef.current.disconnect()
    }, [chat])

    return (
        <StyledMain>
            <Chat>
                <Input/>
            </Chat>
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
