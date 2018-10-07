import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello, learn React'
    };
  }
  render() {
    let {message} = this.state;
    return (
      <div>
        <h2>Rendered from parent</h2>
        <ChildComponent messageFromParent={message} />
        {/* <p>Passing data: <a href="#/props-sample/pass">Demo</a></p> */}
      </div>
    )
  }
}
