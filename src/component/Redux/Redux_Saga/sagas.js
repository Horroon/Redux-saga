import { call, put, delay } from 'redux-saga/effects';

export function* AddSaga() {
	yield put({ type: 'Add_Async', payload: 1 });
}

export function* Subtract() {
	yield put({ type: 'Subtract_Async', payload: 1 });
}
