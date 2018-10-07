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
  render() {
    return (
      <div />
    )
  }
}
