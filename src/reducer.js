import ephemeral from 'redux-ephemeral'
import {URL_DID_CHANGE} from './actions'
function reducer (state, action) {
  switch (action.type) {
    case URL_DID_CHANGE:
      return {
        ...state,
        url: action.payload
      }
  }
  return ephemeral(state, action)
}

export default reducer
