import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getChatsThunk } from './redux/actions'

import Participants from './Components/Participants'
import Chats from './Components/Chats'

import Messages from './Components/Messages'
import Reacts from './Components/Reacts'
import ReactsReceived from './Components/ReactsReceived'
import TopMessages from './Components/TopMessages'
import Mentions from './Components/Mentions'
import Upload from './Components/Upload'

class App extends Component {
  componentDidMount() {
    this.props.getChats()
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Petty Squad Data</h1>
          <Route path="/participants" component={Participants} />
          <Route path="/chats" component={Chats} />

          <Route path="/upload" component={Upload} />
          <Route path="/messages" component={Messages} />
          <Route path="/topmessages" component={TopMessages} />
          <Route path="/reacts" component={Reacts} />
          <Route path="/reactsreceived" component={ReactsReceived} />
          <Route path="/mentions" component={Mentions} />
        </div>
      </HashRouter>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChats: () => dispatch(getChatsThunk())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
