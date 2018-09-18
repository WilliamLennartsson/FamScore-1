import { 
    DELETE_ITEM,
    SHOW_ADD_MISSION,
    ADD_MISSION,
    SET_ADMIN,
    SET_FAMILY,
    SET_LOGGED_IN,
    SHOW_ADD_REWARD,
    ADD_REWARD,
    SET_SCORE
} from './types'

export const deleteListItem = (item) => {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}

export const showAddMission = (visible) => {
    console.log('showAddMission ran.: ', visible);
    
    return {
        type: SHOW_ADD_MISSION,
        payload: visible
    }
}

export const addMission = (mission) => {
    console.log('addMission ran.')

    return {
        type: ADD_MISSION,
        payload: mission
    }
}

export const setAdmin = (isAdmin) => {
    return {
        type: SET_ADMIN,
        payload: isAdmin
    }
}

export const setFamily = (familyObject) => {
    return {
        type: SET_FAMILY,
        payload: familyObject
    }
}

export const setLoggedIn = (nickName, isLoggedIn) => {
    return {
        type: SET_LOGGED_IN,
        payload: [nickName, isLoggedIn]
    }
}

export const showAddReward = (visible) => {
    return {
        type: SHOW_ADD_REWARD,
        payload: visible
    }
}

export const addReward = (reward) => {
    return {
        type: ADD_REWARD,
        payload: reward
    }
}

export const setScore = (body) => {
    console.log('famObj 1 : ', body)
    console.log('famobj length ', body.familyObject.familyMembers.length)
    for (let i = 0; i < body.familyObject.familyMembers.length; i++) {
        if (body.familyObject.familyMembers[i].name === body.nickName) {
            body.familyObject.familyMembers[i].points += body.points
        }
    }
    console.log('updatedFamilyObject: ', body)
    return {
        type: SET_SCORE,
        payload: body.familyObject
    }
}
