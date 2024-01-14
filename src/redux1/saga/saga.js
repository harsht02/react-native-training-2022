import {takeEvery} from 'redux-saga/effects';
import {SHOW_LIGHT} from '../action/actionType';
import {showLight} from '../action/action';

export default function* rootSaga() {
  yield takeEvery(SHOW_LIGHT, showLight);
}
