import { createStore, combineReducers, applyMiddleware } from 'redux'
import { chatsReducer } from './reducer'
import thunk from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

const reducer = combineReducers({
  chats: chatsReducer
})

let middlewares = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(loggerMiddleware)
}

const store = createStore(reducer, applyMiddleware(...middlewares))

export default store
