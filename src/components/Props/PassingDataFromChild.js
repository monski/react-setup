import React, { Component } from 'react';
import MyChildComponent from "./PassingDataChildComponent";

export default class PassingDataFromChild extends Component {
  constructor() {
    super();
    this.state = { 
      message: ''
    }
  }
    handleResponseFromChild = (message) => {
      this.setState({message});
    }
    render() {
      let {message} = this.state;
      return (
        <div>
          Message: {message}
          <MyChildComponent handleResponse={this.handleResponseFromChild} />
        </div>
      )
    }
}
