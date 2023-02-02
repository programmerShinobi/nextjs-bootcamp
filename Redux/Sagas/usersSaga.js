// import { call, put } from 'redux-saga/effects'
import { call, put } from "redux-saga/effects";
import ReduceService from "../Service/reduceService";
import { doAddUsersFailed, doAddUsersSucceed, doDeleteUsersFailed, doDeleteUsersSucceed, doLoginFailed, doLoginSucceed, doRegisterFailed, doRegisterSucceed, doUpdatePhotoUsersFailed, doUpdatePhotoUsersSucceed, doUpdateUsersFailed, doUpdateUsersSucceed, doUserRequestFailed, doUserRequestSucceed, doUsersRequestFailed, doUsersRequestSucceed } from '../Actions/reduceActions';

function* handleUsers() {
    try {
        const result = yield call(ReduceService.getAll);
        yield put(doUsersRequestSucceed(result.data));
    }
    catch (error) {
        yield put(doUsersRequestFailed(error));
    }
}

function* handleUser(action) {
    try {
        const result = yield call(ReduceService.getId, action.payload);
        yield put(doUserRequestSucceed(result.data));
    }
    catch (error) {
        yield put(doUserRequestFailed(error));
    }
}

function* handleAddUsers(action) {
    try {
        const result = yield call(ReduceService.create, action.payload);
        yield put(doAddUsersSucceed(result.data));
    }
    catch (error) {
        yield put(doAddUsersFailed(error));
    }
}

function* handleUpdateUsers(action) {
    try {
        const result = yield call(ReduceService.update, action.payload);
        yield put(doUpdateUsersSucceed(result));
    }
    catch (error) {
        yield put(doUpdateUsersFailed(error));
    }
}

function* handleUpdatePhotoUsers(action) {
    try {
        const result = yield call(ReduceService.updatePhoto, action.payload);
        yield put(doUpdatePhotoUsersSucceed(result));
    }
    catch (error) {
        yield put(doUpdatePhotoUsersFailed(error));
    }
}

function* handleDelUsers(action) {
    try {
        const result = yield call(ReduceService.remove, action.payload);
        yield put(doDeleteUsersSucceed(action.payload));
    }
    catch (error) {
        yield put(doDeleteUsersFailed(error));
    }
}

function* handleLoginUsers(action) {
    try {
        const result = yield call(ReduceService.login, action.payload);
        yield put(doLoginSucceed(result.data));
    }
    catch (error) {
        yield put(doLoginFailed(error));
    }
}

function* handleRegisterUsers(action) {
    try {
        const result = yield call(ReduceService.register, action.payload);
        yield put(doRegisterSucceed(result.data));
    }
    catch (error) {
        yield put(doRegisterFailed(error));
    }
}

export { handleUsers, handleUser, handleAddUsers, handleDelUsers, handleUpdateUsers, handleUpdatePhotoUsers, handleLoginUsers, handleRegisterUsers }