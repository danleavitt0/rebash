import createStore from './store'
import element from 'vdom-element'
import {listen} from 'virtual-component'
import {handleOnce} from 'redux-effects-events'
import vdux from 'vdux'
import App from './app'

const store = createStore({})

store.dispatch(handleOnce('domready', () => {
  listen(store.dispatch)
  vdux(store, state => <App key='app' state={state.app} {...state}/>, document.body)
}))
