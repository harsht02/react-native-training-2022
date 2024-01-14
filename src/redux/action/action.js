import {GET_ITEM, HIDE_ITEM} from './actionType';
export const getItemData = payload => ({
  type: GET_ITEM,
  payload,
});
export const hideItemData = json => ({
  type: HIDE_ITEM,
  json: json,
});
