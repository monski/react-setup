import React, { Component } from 'react'

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h2>I am a child component</h2>
        <h3>My parent component told me to render this '{this.props.messageFromParent}' </h3>
      </div>
    )
  }
}

export default ChildComponent;
