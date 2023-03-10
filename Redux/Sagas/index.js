import { takeEvery, all } from "redux-saga/effects";
import ActionType from "../Constant/ActionType";
import { handleAddUsers, handleDelUsers, handleUpdateUsers, handleUser, handleUsers, handleUpdatePhotoUsers, handleLoginUsers, handleRegisterUsers } from "./usersSaga";

function* watchAll() {
    yield all([
        takeEvery(ActionType.GET_USERS, handleUsers),
        takeEvery(ActionType.GET_USER, handleUser),
        takeEvery(ActionType.ADD_USERS, handleAddUsers),
        takeEvery(ActionType.UPDATE_USERS, handleUpdateUsers),
        takeEvery(ActionType.UPDATE_PHOTO_USERS, handleUpdatePhotoUsers),
        takeEvery(ActionType.DEL_USERS, handleDelUsers),
        takeEvery(ActionType.LOGIN, handleLoginUsers),
        takeEvery(ActionType.REGISTER, handleRegisterUsers)
    ]);
}

export default watchAll;