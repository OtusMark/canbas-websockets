import React from 'react'
import {MessageT} from './Chat'

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
            <div>
                <p>{trimmedName}</p>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        ) : (
            <>
                <div>
                    <p>{user}</p>
                    <div>
                        <p>{text}</p>
                    </div>
                </div>
            </>
        ))
}

// types
type PropsT = {
    message: MessageT
    name: string
}