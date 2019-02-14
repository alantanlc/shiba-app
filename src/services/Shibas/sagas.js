import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
    SHIBAS_GET_SHIBAS_REQUEST,
    SHIBAS_GET_SHIBAS_SUCCESS,
    SHIBAS_GET_SHIBAS_FAILURE,
    SHIBAS_SWIPE_RIGHT_SHIBA_REQUEST,
    SHIBAS_SWIPE_RIGHT_SHIBA_SUCCESS,
    SHIBAS_SWIPE_RIGHT_SHIBA_FAILURE,
    SHIBAS_SWIPE_LEFT_SHIBA_REQUEST,
    SHIBAS_SWIPE_LEFT_SHIBA_SUCCESS,
    SHIBAS_SWIPE_LEFT_SHIBA_FAILURE,
} from '../types';

function* getShibas() {
    try {
        const response = yield call(axios.get, 'https://us-central1-react-training-101.cloudfunctions.net/api/shibes?count=10');
        yield put({
            type: SHIBAS_GET_SHIBAS_SUCCESS,
            payload: response.data,
        });
    } catch (err) {
        console.error(err);
        yield put({ type: SHIBAS_GET_SHIBAS_FAILURE });
    }
}

function* swipeRightShiba(action) {
    try {
        const response = yield call(
            axios.post, '', { shiba: action.payload },
        );
        yield put({
            type: SHIBAS_SWIPE_RIGHT_SHIBA_SUCCESS,
            payload: response.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SHIBAS_SWIPE_RIGHT_SHIBA_FAILURE,
        });
    }
}
function* swipeLeftShiba(action) {
    try {
        const response = yield call(
            axios.post, '', { shiba: action.payload },
        );
        yield put({
            type: SHIBAS_SWIPE_LEFT_SHIBA_SUCCESS,
            payload: response.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SHIBAS_SWIPE_LEFT_SHIBA_FAILURE,
        });
    }
}

export default function* () {
    yield takeLatest(SHIBAS_GET_SHIBAS_REQUEST, getShibas);
    yield takeEvery(SHIBAS_SWIPE_RIGHT_SHIBA_REQUEST, swipeRightShiba);
    yield takeEvery(SHIBAS_SWIPE_LEFT_SHIBA_REQUEST, swipeLeftShiba);
};