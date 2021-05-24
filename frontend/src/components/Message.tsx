import React from 'react'
import {MessageT} from './Chat'
import ReactEmoji from 'react-emoji'
import styled from 'styled-components/macro'

export const Message: React.FC<PropsT> = props => {

    const {
        message: {user, text},
        name
    } = props

    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase()

    if (user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser ? (
            <MessageUser>
                <UserName>{trimmedName}</UserName>
                <MessageBubbleUser>
                    <p>{ReactEmoji.emojify(text)}</p>
                </MessageBubbleUser>
            </MessageUser>
        ) : (
            <>
                <MessageOther>
                    <MessageBubbleOther>
                        <p>{ReactEmoji.emojify(text)}</p>
                    </MessageBubbleOther>
                    <OtherName>{user}</OtherName>
                </MessageOther>
            </>
        ))
}

// Styles
const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem;
  margin-top: 2rem;
`

const MessageUser = styled(MessageContainer)`
  justify-content: flex-end;
`

const MessageOther = styled(MessageContainer)`
  justify-content: flex-start;
`

const MessageBubble = styled.div`
  display: inline-block;

  max-width: 80%;
  
  padding: 0.5rem 1.5rem;
  
  border-radius: 1rem;
`

const MessageBubbleUser = styled(MessageBubble)`
  background-color: ${({theme}) => theme.color.secondary.light};
`

const MessageBubbleOther = styled(MessageBubble)`
  background-color: ${({theme}) => theme.color.tertiary.light};
`

const Name = styled.p`
  color: ${({theme}) => theme.color.grey['500']}
`

const UserName = styled(Name)`
  margin-right: 1rem;
`

const OtherName = styled(Name)`
  margin-left: 1rem;
`


// types
type PropsT = {
    message: MessageT
    name: string
}