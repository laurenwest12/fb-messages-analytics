import React, { Component } from 'react'

export default class Upload extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      file: undefined
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Chat name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="file"
            name="file"
            value={this.state.file}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
    )
  }
}
