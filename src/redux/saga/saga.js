import {takeEvery} from 'redux-saga/effects';
import {GET_ITEM} from '../action/actionType';
import {getItem} from './item';

export default function* rootSaga() {
  yield takeEvery(GET_ITEM, getItem);
}
