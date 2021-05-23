import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Join} from './components/Join'
import {Chat} from './components/Chat'

export const App = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact>
                <Join/>
            </Route>
            <Route path='/chat' render={props =>
                <Chat {...props}/>
            }/>
        </BrowserRouter>
    )
}