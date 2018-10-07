import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
  CLEAR_STATE
} from "./constants/actionTypes";
import home from "./reducers/home";
import todos from './reducers/todos';

const appReducer = combineReducers({
  home,
  todos,
  router: routerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
