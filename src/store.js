/**
 * Imports
 */

import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import effects from 'redux-effects'
import events from 'redux-effects-events'
import location from 'redux-effects-location'
import local from 'virtex-local'
import multi from 'redux-multi'
import logger from 'redux-logger'
import dom from 'virtex-dom'
import component from 'virtex-component'

/**
 * Middleware
 */

const middleware = [
  local,
  component,
  dom(document),
  multi,
  effects,
  events(),
  location(),
  logger()
]

/**
 * Store
 */

function configureStore (initialState) {
  return applyMiddleware(...middleware)(createStore)(reducer, initialState)
}

/**
 * Exports
 */

export default configureStore
