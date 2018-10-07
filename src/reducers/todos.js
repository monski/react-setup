import {
  TOGGLE_TODO,
  ADD_TODO,
  SHOW_ACTIVE
} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
  case ADD_TODO:
    return [
      ...state,
      {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      }
    ]
  case TOGGLE_TODO:
    return state.map(todo =>
      (todo.id === action.payload.id) ? {...todo, completed: !todo.completed} : todo )
  case SHOW_ACTIVE:
    return state.filter((item) => item.completed === false);
  default:
    return state
  }
}

