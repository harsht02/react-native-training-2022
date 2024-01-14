import {put} from 'redux-saga/effects';
import {SHOW_LIGHT} from '../action/actionType';
export function* showTrafficLight(action) {
  
  yield put({type: SHOW_LIGHT, payload: payload});
}
