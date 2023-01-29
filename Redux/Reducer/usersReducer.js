import ActionType from "../Constant/ActionType";

const initialState = {
    users: [],
    user: [],
};

function usersReducers(state = initialState, action) {

    switch (action.type) {

        case ActionType.GET_USERS:
            return { ...state };
        case ActionType.GET_USERS_SUCCEED:
            return { ...state, users: action.payload };

        case ActionType.GET_USER:
            return { ...state };
        case ActionType.GET_USER_SUCCEED:
            return {
                ...state,
                user: action.payload
            }

        case ActionType.ADD_USERS:
            return { ...state };
        case ActionType.ADD_USERS_SUCCEED:
            return { ...state, users: [...state.users, action.payload] };
        case ActionType.ADD_USERS_FAILED:
            return { ...state, users: action.payload };

        case ActionType.UPDATE_USERS:
            return { ...state };
        case ActionType.UPDATE_USERS_SUCCEED:
            return applyUpdateUsers(state, action);
        case ActionType.UPDATE_USERS_FAILED:
            return applyUpdateUsers(state, action);

        case ActionType.DEL_USERS:
            return { ...state };
        case ActionType.DEL_USERS_SUCCEED:
            return {
                ...state,
                users: state.users.filter(users => users.id !== action.payload.id)
            }

        default:
            return { ...state, users: action.payload }
    }
}


const applyUpdateUsers = (state, action) => {
    return state.users.results.map((users) => {
        if (users.userId === state.user.results.userId) {
            return {
                ...state,
                ...state.user.results
            }
        } else {
            return state
        }
    });
}


export default usersReducers