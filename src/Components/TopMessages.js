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

 const reactsKey = [
    {name: '\u00f0\u009f\u0098\u0086', type: 'laughing'},
    {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes'},
    {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked'},
    {name: '\u00f0\u009f\u0098\u00a2', type: 'sad'},
    {name: '\u00f0\u009f\u0098\u00a0', type: 'angry'},
    {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up'},
    {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down'}
]


export default class TopMessages extends Component {
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
        const topMessages = messages.filter(message => {
            if (message.reactions) {
                if (message.reactions.length > 7) {
                    return message
                }
            }
        })
        return (
            <div>
               <ul>
                   {topMessages.map(message => {
                   console.log(message)
                   return (
                   <li key = {message.sender_name}>
                       {message.sender_name}
                       <ul>
                       {message.reactions.map(react => {
                           const currentReact = reactsKey.find(reactKey => reactKey.name === react.reaction)
                           return (<li>
                               {currentReact.type}
                            </li>)
                       })}
                       </ul>
                   </li>)
                   })}
               </ul>
            </div>

        )
    }
}