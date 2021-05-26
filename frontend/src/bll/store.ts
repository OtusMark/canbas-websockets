import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import {chatReducer} from './chat-reducer'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    chat: chatReducer
})

export let store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

// Types
export type AppRootStateT = ReturnType<typeof rootReducer>