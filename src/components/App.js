import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom'

import ErrorBoundary from "./Shared/ErrorBoundary";
import RoutesContainer from "./Routes";

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({

})


export class AppEntry extends Component {
  constructor() {
    super()
    this.state = {
      apploaded: true
    }
  }
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <RoutesContainer />
        </Switch>
      </ErrorBoundary>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppEntry)
