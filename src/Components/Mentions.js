import React, { Component } from 'react'
import axios from 'axios'

const users =  [
    {name: "Paul De Carolis", count: 0},
    {name: "Michael Fragiskatos", count: 0},  
    {name:"Jordan Magat", count: 0},
    {name:"Alex Fishler", count: 0},
    {name:"Eli Sentman", count: 0},
    {name: "Ryan Weiss", count: 0},
    {name: "Brandon Donlon", count: 0},
    {name: "Katelyn Glacken", count: 0},
    {name: "Conor Howachyn", count: 0},
    {name: "Lauren West", count: 0},
    {name: "Felipe Chamon", count: 0},
    {name: "Annie Pizzutelli", count: 0}
 ]


export default class Messages extends Component {
    constructor() {
        super()
        this.state = {
            messages: [],
        }
    }

    componentDidMount () {
        axios.get('/api/petty-data')
        .then(response => this.setState({messages: response.data.messages}))
        .catch(e => console.log(e))
    }

    render () {
        const messages = this.state.messages
        return (
            <div>
                {
                    messages.map(message => (
                        users.map(user => {
                            if (message.sender_name === user.name) {
                                if (message.content) {
                                    const lowercaseContent = message.content.toLowerCase()
                                    if (lowercaseContent.includes(' heather ')) {
                                        ++user.count
                                    }
                                }
                            }
                        })
                    ))
                }
            <ul>
                    {users.map(user => (
                        <li>
                            {user.name} - {user.count} messages
                        </li>
                    ))}
            </ul>
            </div>

        )
    }
}