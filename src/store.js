import { createStore } from 'redux'

const initialState = {
    name: '',
    email: ''
}

export const SAVE_USER = 'SAVE_USER'
export const CLEAR_USER = 'CLEAR_USER'

function reducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case SAVE_USER:
            const { name, email } = payload
            return {
                ...state, 
                name, 
                email
            };
        case CLEAR_USER:
            return {
                ...state, 
                name: '',
                email: ''
            };
        default:
            return {
                ...state
            }
    }
}

export default createStore(reducer)