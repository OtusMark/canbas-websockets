import React, {ChangeEvent, MouseEvent, useState} from 'react'
import {Link} from 'react-router-dom'

export const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onChangeRoom = (event: ChangeEvent<HTMLInputElement>) => {
        setRoom(event.target.value)
    }

    const onClickLink = (event: MouseEvent<HTMLAnchorElement>) => {
        return (!name || !room) ? event.preventDefault() : null
    }

    return (
        <div>
            <div>
                <h1>Join</h1>
                <div><input placeholder='Name' type='text' onChange={onChangeName}/></div>
                <div><input placeholder='Room' type='text' onChange={onChangeRoom}/></div>
                <Link onClick={onClickLink} to={`/chat?name=${name}&room=${room}`}>
                    <button type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
    )
}