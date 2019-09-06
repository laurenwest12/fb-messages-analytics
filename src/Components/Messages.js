import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const users = [
  { name: 'Paul De Carolis', count: 0 },
  { name: 'Michael Fragiskatos', count: 0 },
  { name: 'Jordan Magat', count: 0 },
  { name: 'Alex Fishler', count: 0 },
  { name: 'Eli Sentman', count: 0 },
  { name: 'Ryan Weiss', count: 0 },
  { name: 'Brandon Donlon', count: 0 },
  { name: 'Katelyn Glacken', count: 0 },
  { name: 'Conor Howachyn', count: 0 },
  { name: 'Lauren West', count: 0 },
  { name: 'Felipe Chamon', count: 0 },
  { name: 'Annie Pizzutelli', count: 0 }
];

class Messages extends Component {
  render() {
    const { chats } = this.props;
    let messages;
    if (chats[0]) {
      messages = chats[0].data.messages;
    }
    return (
      <div>
        {messages &&
          messages.map(message =>
            users.map(user => {
              if (message.sender_name === user.name) {
                ++user.count;
              }
            })
          )}
        <ul>
          {users.map(user => (
            <li>
              {user.name} - {user.count} messages
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ chats }) => ({ chats });

export default connect(mapStateToProps)(Messages);
