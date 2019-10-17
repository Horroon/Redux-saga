import { createStore, applyMiddleware } from 'redux';
import Reducer from '../Reducer/reducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../Redux_Saga/rootSaga';
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(RootSaga);

export default store;
