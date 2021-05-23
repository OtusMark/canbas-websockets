import React, {ChangeEvent, KeyboardEvent, MouseEvent} from 'react'

export const ChatInput: React.FC<PropsT> = props => {

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
        <form>
            <input type='text'
                   placeholder='Type a message...'
                   value={message}
                   onChange={onChangeInput}
                   onKeyPress={onKeyPressInput}/>
            <button onClick={sendMessage}>Send</button>
        </form>
    )
}

// Types
type PropsT = {
    message: string
    setMessage: (value: string) => void
    sendMessage: (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => void | null
}
