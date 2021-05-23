import React from 'react'

export const InfoBar: React.FC<PropsT> = props => {

    const {
        room
    } = props

    return (
        <div>
            <div>
                <h3>{room}</h3>
            </div>
            <div>
                <a href='/'><button>Close</button></a>
            </div>
        </div>
    )
}

// Types
type PropsT = {
    room: string
}