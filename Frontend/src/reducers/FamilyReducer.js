import {
    SET_FAMILY, 
    SET_LOGGED_IN,
    SET_SCORE
} from '../actions/types'

const INITIAL_STATE = {
    familyName: '',
    password: '',
    familyObject: {},
    isLoggedIn: false,
    nickName: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log('Action: ', action);
    console.log('Action.payload: ', action.payload);
    switch (action.type) {
        case SET_FAMILY:
            return {
                ...state,
                familyObject: action.payload
            }
        case SET_LOGGED_IN:
            return {
                ...state,
                nickName: action.payload[0],
                isLoggedIn: action.payload[1]
            }
        case SET_SCORE:
            return{
                ...state,
                familyObject: action.payload
            }
        default:
            return state
    }
}

