import element from 'virtex-element'
import {fetch} from 'redux-effects-fetch'
import {bind} from 'redux-effects'

const jsonServerUrl = 'http://localhost:5000/api'

const FETCH_PROJECT = 'FETCH_PROJECT'
const PROJECT_LOADED = 'PROJECT_LOADED'
const projectLoaded = {
  type: PROJECT_LOADED
}

function initialState () {
  return {
    example: ''
  }
}

function render (state) {
  return (
    <div>
      Hello
    </div>
  )
}

function reducer (state, action) {
  return state
}

export default {
  initialState,
  reducer,
  render
}
