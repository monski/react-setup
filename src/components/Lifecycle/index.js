import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }
  componentWillMount() {
    // using redux you can call an api here.
    // no setting of state here
  }
  componentDidMount() {
    // set initial load, or setState will happen here
  }
  componentWillUnmount() {
    // do cleanup here before component destroy: like action listener.
  }

  shouldComponentUpdate() {
    // You can access `this.props` and `this.state` here
    // This function should return a boolean, whether the component should re-render.
    return false;
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // Do not call this.setState here as it will cause re-render
    if (this.props.message !== prevProps.message) {
      //do something here
    }
  }

  render() {
    // You can access `this.props` and `this.state` here
    // Do not call this.setState here
    return (
      <div />
    )
  }
}
