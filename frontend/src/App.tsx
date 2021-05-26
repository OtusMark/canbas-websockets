import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Join} from './components/Join'
import {Chat} from './components/Chat'
import styled from 'styled-components/macro'
import {useSelector} from 'react-redux'
import {AppRootStateT} from './bll/store'


export const App = () => {

    const room = useSelector<AppRootStateT, string>(state => state.chat.room)
    const name = useSelector<AppRootStateT, string>(state => state.chat.name)

    return (
        <AppWrapper>
            { room && name ? <Chat room={room} name={name}/> : <Join/>}
        </AppWrapper>
    )
}

// Styles
const AppWrapper = styled.main`
  height: 100vh;

  background-color: ${({theme}) => theme.color.grey['800']}
`