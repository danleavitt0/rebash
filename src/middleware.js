/**
 * Imports
 */

import effects from 'redux-effects'
import events from 'redux-effects-events'
import client from 'vdux-preset-client'
import location from 'redux-effects-location'
import logger from 'redux-logger'
import fetch from 'redux-effects-fetch'
import multi from 'redux-multi'

/**
 * Middleware
 */

const middleware = [
  multi,
  effects,
  events(),
  fetch,
  location(window),
  logger()
]

export default middleware
