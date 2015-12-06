/**
 * Imports
 */

import vdux from 'vdux'
import createStore from './store'
import {handleOnce} from 'redux-effects-events'
import element from 'virtex-element'
import virtex from 'virtex'
import App from './app'
import {initializeApp} from './actions'

/**
 * Setup store
 */

const store = createStore({
  posts: [],
  0: {
    0:{}
  }
})

/**
 * App
 */

store.dispatch(handleOnce('domready', () => {
  store.dispatch(initializeApp())
  vdux(store, virtex(store.dispatch), state => <App posts={state.posts} url={state.url}/>, document.body)
}))
