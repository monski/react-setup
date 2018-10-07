import React from 'react'
import { connect } from 'react-redux'
import {
  APP_LOAD
} from '../constants/actionTypes'
import { Route } from 'react-router-dom'
import Home from './Home'
import PropsParent from "./Props/ParentComponent";
import PassingData from "./Props/PassingDataFromChild";
import TodoList from "./Todo/TodoList";

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
      <React.Fragment>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Fixed navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/props-sample">Props</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/todo">Todo Apps</a>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </header>
        <br />
        <br />
        <br />
        <main role="main" className="container">
          <Route exact path="/" component={Home}/>
          <Route exact path="/main" component={Home}/>
          <Route exact path="/props-sample" component={PropsParent}/>
          <Route path="/props-sample/pass" component={PassingData}/>
          <Route exact path="/todo" component={TodoList} />
        </main>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutesContainer);

