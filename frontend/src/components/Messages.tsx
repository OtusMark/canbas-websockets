import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import {Message} from './Message'
import {MessageT} from './Chat'
import styled from 'styled-components/macro'

export const Messages: React.FC<PropsT> = props => {

    const {
        messages,
        name
    } = props

    return (
        <StyledScrollToBottom>
            {messages.map((message, i) => <div key={i}>
                <Message message={message} name={name}/>
            </div>)}
        </StyledScrollToBottom>
    )
}

// Styles
const StyledScrollToBottom = styled(ScrollToBottom)`
  flex: auto;
  padding: 1rem;
  overflow: auto;
`

// Types
type PropsT = {
    messages: Array<MessageT>
    name: string
}