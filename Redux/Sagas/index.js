import { takeEvery, all } from "redux-saga/effects";
import ActionType from "../Constant/ActionType";
import { handleAddUsers, handleDelUsers, handleUpdateUsers, handleUser, handleUsers } from "./usersSaga";

function* watchAll() {
    yield all([
        takeEvery(ActionType.GET_USERS, handleUsers),
        takeEvery(ActionType.GET_USER, handleUser),
        takeEvery(ActionType.ADD_USERS, handleAddUsers),
        takeEvery(ActionType.UPDATE_USERS, handleUpdateUsers),
        takeEvery(ActionType.DEL_USERS, handleDelUsers)
    ]);
}

export default watchAll;