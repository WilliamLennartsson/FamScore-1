import {
    CHECK_IF_ADMIN,
    SET_ADMIN,
    SHOW_ADD_REWARD,
    ADD_REWARD
} from '../actions/types'

const INITIAL_STATE = {
    isAdmin: false,
    rewardsList: [
        {
            points: 500, 
            titleText: 'Fortnite 2h', 
            infoText: 'Redeem this to play Fortnite for 2h'
        },
        {
            points: 1000,
            titleText: 'Shopping Worth 500:-',
            infoText: 'Gives you 500:- to shop for'
        },
        {
            points: 600,
            titleText: 'Massage 30mins',
            infoText: 'Redeem this to get a massage for 30 minutes from admin'
        },
        {
            points: 200,
            titleText: 'Alone-Time 3h',
            infoText: 'Redeem this to get some alone-time'
        },
        {
            points: 2000,
            titleText: 'Duty-Free 1 Day',
            infoText: 'Your significant other will have to do all the chores in the house for one day.'
        }
    ],
    visible: false
}

export default (state = INITIAL_STATE, action) => {
    console.log('Action: ', action);
    switch (action.type) {
        case CHECK_IF_ADMIN:
            return {
                ...state
            }
        case SET_ADMIN:
            return {
                ...state,
                isAdmin: action.payload
            }
        case SHOW_ADD_REWARD:
            return {
                ...state,
                visible: action.payload
            }
        case ADD_REWARD:
            return {
                ...state,
                rewardsList: [action.payload, ...state.rewardsList],
                visible: false
            }
        default:
            return state
    }
}
