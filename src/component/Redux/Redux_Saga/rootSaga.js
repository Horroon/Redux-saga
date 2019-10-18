import { all, takeEvery,put,call } from 'redux-saga/effects';
import {AddSaga} from './sagas';

function* rootSaga() {
	yield takeEvery('Add',AddSaga);
}


export default rootSaga