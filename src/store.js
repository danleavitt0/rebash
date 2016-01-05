/**
 * Imports
 */

import reducer from './reducer'
import effects from 'redux-effects'
import events from 'redux-effects-events'
import client from 'vdux-preset-client'
import location from 'redux-effects-location'
import logger from 'redux-logger'
import fetch from 'redux-effects-fetch'
import thunk from 'redux-thunk'

/**
 * Middleware
 */

const middleware = [
  thunk,
  effects,
  events(),
  location(),
  fetch,
  logger()
]

/**
 * Store
 */

function configureStore (initialState) {
  return client(...middleware)(reducer, initialState)
}

/**
 * Exports
 */

export default configureStore
