import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware } from './middleware';
import reducer from './reducer';

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory';


export const history = createHistory();


// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);
const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, promiseMiddleware);
  }
  // Enable additional logging in non-production environments.
  return applyMiddleware(myRouterMiddleware, promiseMiddleware, createLogger({collapsed: true}))
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));
