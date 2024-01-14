import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import mainReducer from '../reducer/index';
import rootSaga from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
