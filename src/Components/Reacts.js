import React, { Component } from 'react'
import axios from 'axios'

const users =  [
    {name: "Paul De Carolis",
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]
    },
    {name: "Michael Fragiskatos", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},  
    {name:"Jordan Magat", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},
    {name:"Alex Fishler", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},
    {name:"Eli Sentman", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},
    {name: "Ryan Weiss", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},
    {name: "Brandon Donlon", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},
    {name: "Katelyn Glacken", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},
    {name: "Conor Howachyn", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},
    {name: "Lauren West", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},
    {name: "Felipe Chamon", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]},
    {name: "Annie Pizzutelli", 
    reactions: [{name: '\u00f0\u009f\u0098\u0086', type: 'laughing', count: 0},
                {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes', count: 0},
                {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked', count: 0},
                {name: '\u00f0\u009f\u0098\u00a2', type: 'sad', count: 0},
                {name: '\u00f0\u009f\u0098\u00a0', type: 'angry', count: 0},
                {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up', count: 0},
                {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down', count: 0}]}
 ]

 const reacts = [
     {name: '\u00f0\u009f\u0098\u0086', type: 'laughing'},
     {name: '\u00f0\u009f\u0098\u008d', type: 'heart eyes'},
     {name: '\u00f0\u009f\u0098\u00ae', type: 'shocked'},
     {name: '\u00f0\u009f\u0098\u00a2', type: 'sad'},
     {name: '\u00f0\u009f\u0098\u00a0', type: 'angry'},
     {name: '\u00f0\u009f\u0091\u008d', type: 'thumb up'},
     {name: '\u00f0\u009f\u0091\u008e', type: 'thumbs down'}
 ]


export default class Users extends Component {
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
                    messages.map(message => {
                        if (message.reactions) {
                            let reactions = message.reactions
                            reactions.map(reaction => {
                                users.map(user => {
                                    if (user.name === reaction.actor) {
                                        const userReactions = user.reactions
                                        userReactions.map(userReaction => {
                                            if (userReaction.name === reaction.reaction) {
                                                userReaction.count++
                                                console.log(user)
                                            }
                                        })
                                    }
                                })
                            })
                        }
                    })
                }
            <ul>
                {users.map(user => (
                    <li key = {user.name}>
                        {user.name}
                        <ul>
                            {user.reactions.map(reaction => (
                                <li key={reaction.type}>
                                    {reaction.type} - {reaction.count}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            </div>

        )
    }
}