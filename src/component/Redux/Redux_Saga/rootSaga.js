import { all, takeEvery,put,call } from 'redux-saga/effects';
import {AddSaga, Subtract} from './sagas';

function* rootSaga() {
	yield takeEvery('Add',AddSaga);
	yield takeEvery('Subtract',Subtract);
}


export default rootSaga