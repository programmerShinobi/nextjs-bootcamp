import ActionType from "../Constant/ActionType";

export const doUsersRequest = () => {
    return {
        type: ActionType.GET_USERS
    }
}

export const doUsersRequestSucceed = (payload) => {
    return {
        type: ActionType.GET_USERS_SUCCEED,
        payload
    }
}

export const doUsersRequestFailed = (payload) => {
    return {
        type: ActionType.GET_USERS_SUCCEED,
        payload
    }
}

export const doUsersCreate = (payload) => {
    return {
        type: ActionType.ADD_USERS,
        payload
    }
}

export const doAddUsersSucceed = (payload) => {
    return {
        type: ActionType.ADD_USERS_SUCCEED,
        payload
    }

}

export const doAddUsersFailed = (payload) => {
    return {
        type: ActionType.ADD_USERS_FAILED,
        payload
    }

}



export const doUpdateUsers = (payload) => {
    return {
        type: ActionType.UPDATE_USERS,
        payload
    }
}


export const doUpdateUsersSucceed = (payload) => {
    return {
        type: ActionType.UPDATE_USERS_SUCCEED,
        payload
    }
}


export const doUpdateUsersFailed = (payload) => {
    return {
        type: ActionType.UPDATE_USERS_FAILED,
        payload
    }
}


export const doDeleteUsers = (payload) => {
    return {
        type: ActionType.DEL_USERS,
        payload
    }
}

export const doDeleteUsersSucceed = (payload) => {
    return {
        type: ActionType.DEL_USERS_SUCCEED,
        payload
    }
}

export const doDeleteUsersFailed = (payload) => {
    return {
        type: ActionType.DEL_USERS_FAILED,
        payload
    }
}