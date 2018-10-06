import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, history} from './store'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../public/styles/default.css';

const rootEl = document.getElementById('root')
ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), rootEl);
