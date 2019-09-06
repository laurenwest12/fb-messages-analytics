import React, { Component } from 'react'
import { connect } from 'react-redux'

class Chats extends Component {
  render() {
    const { chats } = this.props
    return (
      <div>
        <h4>{`Chats`}</h4>

        <div>
          <ul id="flex-container">
            {chats.map(chat => {
              const { id, name, data } = chat
              return <li key={id}>{name}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ chats }) => ({ chats })

export default connect(mapStateToProps)(Chats)
