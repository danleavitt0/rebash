/**
 * Imports
 */

import vdux from 'vdux'
import createStore from './store'
import {handleOnce} from 'redux-effects-events'
import element from 'virtex-element'
import App from './app'
import {initializeApp} from './actions'

/**
 * Setup store
 */

const store = createStore({
  posts: []
})

/**
 * App
 */

store.dispatch(handleOnce('domready', () => {
  store.dispatch(initializeApp())
  vdux(
    store,
    App,
    document.body
  )
}))
