import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersReducers from "../Reducer/usersReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from '../Sagas';

const saga = createSagaMiddleware()
const reducer = combineReducers({
    usersReducers: usersReducers
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(saga)
});

saga.run(rootSaga);

export default store;