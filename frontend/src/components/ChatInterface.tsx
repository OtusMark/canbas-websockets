import React, {ChangeEvent, KeyboardEvent, MouseEvent} from 'react'
import styled from 'styled-components/macro'
import { Button } from '../styles/uiElements/Button'

export const ChatInterface: React.FC<PropsT> = props => {

    const {
        message,
        setMessage,
        sendMessage
    } = props

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    const onKeyPressInput = (event: KeyboardEvent<HTMLInputElement>) => {
        return event.key === 'Enter' ? sendMessage(event) : null
    }

    return (
        <ChatInputWrapper>
            <ChatInput type='text'
                   placeholder='Type a message...'
                   value={message}
                   onChange={onChangeInput}
                   onKeyPress={onKeyPressInput}/>
            <ChatButton onClick={sendMessage}>Send</ChatButton>
        </ChatInputWrapper>
    )
}

// Styles
const ChatInputWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  
  border-top: 2px solid ${({theme}) => theme.color.grey['300']};
`

const ChatInput = styled.input`
  padding: 1rem;
  width: 100%;
  
  font-size: 1.2rem;

  border: none;
  border-radius: 0;
`

const ChatButton = styled(Button)`
  flex: 0 1;
`

// Types
type PropsT = {
    message: string
    setMessage: (value: string) => void
    sendMessage: (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => void | null
}
