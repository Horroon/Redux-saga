import { all, takeEvery,takeLatest,put,call } from 'redux-saga/effects';
import {AddSaga, Subtract} from './sagas';

function* rootSaga() {
	yield takeLatest('Add',AddSaga);
	yield takeEvery('Subtract',Subtract);
}


export default rootSaga