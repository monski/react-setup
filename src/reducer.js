import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  LOGOUT
} from "./constants/actionTypes";
import home from "./reducers/home";


const appReducer = combineReducers({
  home,
  router: routerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
