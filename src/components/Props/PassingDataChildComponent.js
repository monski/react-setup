import React, { Component } from 'react'

export default class PassingDataChildComponent extends Component {
    doPass = () => {
      this.props.handleResponse('Hello from child');
    }
    render() {
      return (
        <div>
          <button onClick={this.doPass}>Pass message to parent</button>
        </div>
      )
    }
}
