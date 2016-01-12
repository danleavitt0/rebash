/**
 * Imports
 */

import vdux from 'vdux/dom'
import domready from '@f/domready'
import element from 'virtex-element'
import App from './app'
import reducer from './reducer'
import middleware from './middleware'

/**
 * Setup store
 */

const initialState = {
  posts: [],
  url: '/'
}

/**
 * App
 */
let hmr
domready(() => {
  hmr = vdux({
    middleware,
    reducer,
    initialState,
    app: App
  })
})

if (module.hot) {
  // These two lines are waiting on https://github.com/AgentME/browserify-hmr
  // module.hot.decline()
  // module.hot.unaccepted(() => window.location.reload())
  module.hot.accept(['./app', './reducer'],
    () => hmr.replace(require('./app').default, require('./reducer').default))
}
