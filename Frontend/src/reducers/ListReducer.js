import {
    DELETE_ITEM,
    SHOW_ADD_MISSION,
    ADD_MISSION
} from '../actions/types'

const INITIAL_STATE = {
    list: [
        {
            points: 50,
            titleText: 'Tjena',
            infoText: 'gahafgadfgagragra'
        },
        {
            points: 100,
            titleText: 'Hallå',
            infoText: 'grghhthtafeefefe'
        }
    ],
    visible: false
}

export default (state = INITIAL_STATE, action) => {
    console.log('Action: ', action);
    switch (action.type) {
        case DELETE_ITEM:
            return {
                ...state,
                list: action.payload
            }
        case SHOW_ADD_MISSION:
            console.log('action payload: ', action.payload);
            return {
                ...state,
                visible: action.payload
            }
        case ADD_MISSION:
            return {
                ...state,
                list: [action.payload, ...state.list],
                visible: false
            }
        default:
            return state
    }
}
