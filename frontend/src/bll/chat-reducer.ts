const initialState = {
    room: '',
    name: '',
    messages: [] as Array<MessageT>,
}

export const chatReducer = (state = initialState, action: ActionsT) => {
    switch (action.type) {
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
export const addMessage = (user: string, text: string) => ({type: 'chat/addMessage', payload: {user, text}} as const)

// Types
type ActionsT = ReturnType<typeof addMessage>

export type MessageT = {
    user: string
    text: string
}