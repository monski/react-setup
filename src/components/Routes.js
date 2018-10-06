import React from 'react'
import { connect } from 'react-redux'
import {
  APP_LOAD
} from '../constants/actionTypes'
import { Route } from 'react-router-dom'
import Home from './Home'

const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = dispatch => ({
  appLoaded: () => dispatch({ type: APP_LOAD}),
})

class RoutesContainer extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
      this.props.appLoaded();
  }
  render() {
      return (
        <div id="wrapper">
          <main role="main">
            <div className="page-wrapper">
              <Route exact path="/" component={Home}/>
              <Route exact path="/main" component={Home}/>
            </div>
          </main>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer);

