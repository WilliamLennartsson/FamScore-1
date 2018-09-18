import { combineReducers } from 'redux'
import ListReducer from './ListReducer'
import RewardsReducer from './RewardsReducer'
import FamilyReducer from './FamilyReducer'

export default combineReducers({
    listReducer: ListReducer,
    rewardsReducer: RewardsReducer,
    familyReducer: FamilyReducer
})
