import reducer from './reducer'
import {applyMiddleware, createStore} from 'redux'
import multi from 'redux-multi'
import effects from 'redux-effects'
import events from 'redux-effects-events'
import location from 'redux-effects-location'

const middlewares = [
  multi,
  effects,
  events(),
  location()
]

export default (initialState) => applyMiddleware(...middlewares)(createStore)(reducer, initialState)
