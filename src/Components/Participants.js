import React, { Component } from 'react'
import axios from 'axios'

export default class Participants extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/chats')
      .then(response => {
        console.log(response.data)
        this.setState({ users: response.data.participants })
      })
      .catch(e => console.log(e))
  }

  render() {
    const users = this.state.users
    return (
      <div>
        <ul>
          {/* {users.map(user => (
            <li key={user.name}>{user.name}</li>
          ))} */}
        </ul>
      </div>
    )
  }
}
