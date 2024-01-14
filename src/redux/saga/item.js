import {put} from 'redux-saga/effects';
import {GET_ITEMDATA} from '../action/actionType';
export function* getItem(action) {
  console.log('ywgydfeywfdefded');
  const json = yield fetch('https://jsonplaceholder.typicode.com/posts').then(
    response => response.json(),
  );
  console.log('esljnbehsjkjkdsbhjkrbdjksdsij', json);
  yield put({type: GET_ITEMDATA, payload: json});
}
