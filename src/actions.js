import {bindUrl} from 'redux-effects-location'
import {fetch} from 'redux-effects-fetch'
import {bind} from 'redux-effects'

const jsonServerUrl = 'http://localhost:5000/api'
const postsUrl = jsonServerUrl + '/posts'

const URL_DID_CHANGE = 'URL_DID_CHANGE'
const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING'
const POSTS_DID_LOAD = 'POSTS_DID_LOAD'
const HYDRATE_STATE = 'HYDRATE_STATE'


function initializeApp () {
  return [
    bindUrl(urlDidChange),
    hydrateState({})
  ]
}

function result ({value}) {
  const {buckets} = value
  return postsDidLoad(buckets)
}

function hydrateState (state) {
  return {
    type: HYDRATE_STATE,
    payload: state
  }
}

function urlDidChange (url) {
  return {
    type: URL_DID_CHANGE,
    payload: url
  }
}

function fetchPosts () {
  return [
    bind(fetch(postsUrl), result, (err) => console.log(err)),
    postsAreLoading()
  ]
}

function postsAreLoading () {
  return {
    type: POSTS_ARE_LOADING
  }
}

function postsDidLoad (posts) {
  return {
    type: POSTS_DID_LOAD,
    payload: posts
  }
}

export {
  initializeApp,
  fetchPosts,

  URL_DID_CHANGE,
  POSTS_ARE_LOADING,
  POSTS_DID_LOAD,
  HYDRATE_STATE
}
