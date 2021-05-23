import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import {Message} from './Message'
import {MessageT} from './Chat'

export const Messages: React.FC<PropsT> = props => {

    const {
        messages,
        name
    } = props

    return (
        <ScrollToBottom>
            {messages.map((message, i) => <div key={i}>
                <Message message={message} name={name}/>
            </div>)}
        </ScrollToBottom>
    )
}

// Types
type PropsT = {
    messages: Array<MessageT>
    name: string
}