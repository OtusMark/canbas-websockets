const initialState = {
    room: '',
    name: '',
    messages: [] as Array<MessageT>,
}
export const chatReducer = (state = initialState, action: ActionsT) => {
    switch (action.type) {
        case 'chat/joinChat': {
            return {
                ...state,
                room: action.payload.room,
                name: action.payload.name
            }
        }
        case 'chat/quitChat': {
            return {
                ...state,
                room: '',
                name: ''
            }
        }
        case 'chat/addMessage': {
            return {
                ...state,
                messages: [...state.messages, {
                    user: action.payload.user,
                    text: action.payload.text
                }]
            }
        }
        default: {
            return state
        }
    }
}

// Action creators
export const joinChat = (room: string, name: string) => ({type: 'chat/joinChat', payload: {room, name}} as const)
export const quitChat = () => ({type: 'chat/quitChat'} as const)
export const addMessage = (user: string, text: string) => ({type: 'chat/addMessage', payload: {user, text}} as const)

// Types
type ActionsT = ReturnType<
    typeof joinChat |
    typeof quitChat |
    typeof addMessage
    >

export type MessageT = {
    user: string
    text: string
}