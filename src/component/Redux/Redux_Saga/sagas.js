import { call, put, delay } from 'redux-saga/effects';

export function* AddSaga() {
	delay(4000);
	console.log('Add Saga Called');
	yield put({ type: 'Add_Async', payload: 1 });
}
