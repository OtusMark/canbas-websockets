import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Join} from './components/Join'
import {Chat} from './components/Chat'
import styled from 'styled-components/macro'


export const App = () => {

    // @ts-ignore
    console.log(React.createContext())

    return (
        <AppWrapper>
            <BrowserRouter>
                <Route path='/' exact>
                    <Join/>
                </Route>
                <Route path='/chat' render={props =>
                    <Chat {...props}/>
                }/>
            </BrowserRouter>
        </AppWrapper>
    )
}

// Styles
const AppWrapper = styled.main`
  height: 100vh;

  background-color: ${({theme}) => theme.color.grey['800']}
`