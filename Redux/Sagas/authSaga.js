import { call, put } from "redux-saga/effects";
import ReduceService from "../Service/reduceService";
import { doLoginUsersFailed, doLoginUsersSucceed } from '../Actions/reduceActions';

function* handleLoginUsers(action) {
    try {
        const result = yield call(ReduceService.login, action.payload);
        yield put(doLoginUsersSucceed(result.data));
    }
    catch (error) {
        yield put(doLoginUsersFailed(error));
    }
}

export { handleLoginUsers }