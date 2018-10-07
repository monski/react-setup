import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  TODO_LIST_LOADED, TOGGLE_TODO
} from '../../constants/actionTypes';
import AddTodo from './AddTodo';

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  todoInit: () => dispatch({type: TODO_LIST_LOADED}),
  toggleTodo: (payload) => dispatch({type: TOGGLE_TODO, payload})
});

class TodoList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.todoInit();
  }
  render() {
    return (
      <div>
        <AddTodo />
        {
          this.props.todos && this.props.todos.length > 0 ? 
            (
              this.props.todos.map((todo, index) => {
                let toggleTodo = () => {
                  this.props.toggleTodo({id: todo.id})
                }
                return (
                  <li key={`todo-${index}`} 
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    onClick={toggleTodo}>{todo.text} </li>
                )
              })
            ) : <h2>No Todo Found</h2>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
