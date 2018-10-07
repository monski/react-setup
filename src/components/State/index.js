import React, { Component } from 'react'

export default class State extends Component {
  constructor() {
    super();
    this.state = {
      username: 'Nico Robin'
    }
  }
  
  handleInputChange(username) {
      this.setState({username})
  }

  render() {
    const { username } = this.state

    return (
    <div>
          { this.state.username }
    </div>
    
   
   /*<div>
        <div>
            <input type="text" value={this.state.username}
                   onChange={event => this.handleInputChange(event.target.value)}/>
        </div>
        <p>Your new username is : {username}</p>
   </div>*/
    )
  }
}
