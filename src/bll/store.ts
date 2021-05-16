import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

// Types
export type AppRootStateT = ReturnType<typeof rootReducer>
export type AppDispatchT = typeof store.dispatch