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

export const doUserRequest = (payload) => {
    return {
        type: ActionType.GET_USER,
        payload
    }
}

export const doUserRequestSucceed = (userId) => {
    return {
        type: ActionType.GET_USER_SUCCEED,
        payload: userId
    }
}

export const doUserRequestFailed = (payload) => {
    return {
        type: ActionType.GET_USER_SUCCEED,
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

export const doUpdateUsers = (id, payload) => {
    return {
        type: ActionType.UPDATE_USERS,
        id,
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

export const doUpdatePhotoUsers = (id, payload) => {
    return {
        type: ActionType.UPDATE_PHOTO_USERS,
        id,
        payload
    }
}

export const doUpdatePhotoUsersSucceed = (payload) => { // undefined
    return {
        type: ActionType.UPDATE_PHOTO_USERS_SUCCEED,
        payload
    }
}


export const doUpdatePhotoUsersFailed = (payload) => {
    return {
        type: ActionType.UPDATE_PHOTO_USERS_FAILED,
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
    console.info(payload)
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

export const doLogin = (payload) => {
    return {
        type: ActionType.LOGIN,
        payload
    }
}

export const doLoginSucceed = (payload) => {
    return {
        type: ActionType.LOGIN_SUCCEED,
        payload
    }
}

export const doLoginFailed = (payload) => {
    return {
        type: ActionType.LOGIN_FAILED,
        payload
    }
}

export const doRegister = (payload) => {
    return {
        type: ActionType.REGISTER,
        payload
    }
}

export const doRegisterSucceed = (payload) => {
    return {
        type: ActionType.REGISTER_SUCCEED,
        payload
    }
}

export const doRegisterFailed = (payload) => {
    return {
        type: ActionType.REGISTER_FAILED,
        payload
    }
}