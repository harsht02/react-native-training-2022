import {GET_ITEMDATA, HIDE_ITEM} from '../action/actionType';
const initialState = {
  list: [],
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMDATA:
      return {...state, list: action.payload};

    case HIDE_ITEM:
      return {...state, list: []};
    default:
      return state;
  }
};
export default mainReducer;
