import React, { Component } from 'react'
import { connect } from 'react-redux'

import {ADD_TODO, SHOW_ACTIVE} from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => ({
  addTodo: (payload) => dispatch({type: ADD_TODO, payload}),
  toggleFilter: () => dispatch({type: SHOW_ACTIVE})

})


class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      text: value
    })
  }
  toggleFilter = () => {
    this.props.toggleFilter();
  }
  addTodo = () => {
    let {text} = this.state
    const payload = {
      id: Date.now(),
      text
    }
    
    this.props.addTodo(payload);
    this.setState({text: ''});
  }
  render() {
    return (
      <div>
        <div>
          <input onChange={this.handleChange} value={this.state.text} />
          <button type="button" onClick={this.addTodo}>
            Add Todo
          </button>
          <button onClick={this.toggleFilter}>FILTER NOT COMPLETED</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
