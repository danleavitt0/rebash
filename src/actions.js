import {bindUrl} from 'redux-effects-location'

const URL_DID_CHANGE = 'URL_DID_CHANGE'

function initializeApp () {
  return [
    bindUrl(urlDidChange)
  ]
}

function urlDidChange (url) {
  return {
    type: URL_DID_CHANGE,
    payload: url
  }
}

export {
  initializeApp,

  URL_DID_CHANGE
}
