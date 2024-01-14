import {SHOW_LIGHT} from '../action/actionType';
const initialState = {
  showColor: 'false',
};
const mainReducer = (state = initialState, action) => {
  // console.log('harsh');
  switch (action.type) {
    case SHOW_LIGHT:
      return {};
    default:
      return state;
  }
};
export default mainReducer;
