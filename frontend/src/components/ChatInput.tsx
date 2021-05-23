import React, {ChangeEvent, KeyboardEvent} from 'react'

export const ChatInput: React.FC<PropsT> = props => {

    const {
        message,
        onChangeInput,
        onKeyPressInput
    } = props

    return (
        <form>
            <input type='text'
                   placeholder='Type a message...'
                   value={message}
                   onChange={onChangeInput}
                   onKeyPress={onKeyPressInput}/>
            {/*<button onClick={(event) => event.preventDefault()}>Send</button>*/}
        </form>
    )
}

// Types
type PropsT = {
    message: string
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressInput: (event: KeyboardEvent<HTMLInputElement>) => void | null
}
