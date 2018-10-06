import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  case HOME_PAGE_LOADED:
    const data = action.payload
    return {
      ...state,
      data: data
    };
  case HOME_PAGE_UNLOADED:
    return {
      ...state
    };
  default:
    return state;
  }
};
