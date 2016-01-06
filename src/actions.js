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
    fetchPosts()
  ]
}

function result ({value}) {
  const {buckets} = value
  return postsDidLoad(buckets)
}

function urlDidChange (url) {
  return {
    type: URL_DID_CHANGE,
    payload: url
  }
}

function createProject () {
  return [
    bind(fetch(jsonServerUrl + '/projects', {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
      body: JSON.stringify({
        name: 'test-rebash-1'
      })
    }), info => console.log(info), err => console.warn(err))
  ]
}

function fetchPosts () {
  return [
    postsAreLoading(),
    bind(fetch(postsUrl), result, (err) => console.warn(err))
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
  createProject,

  URL_DID_CHANGE,
  POSTS_ARE_LOADING,
  POSTS_DID_LOAD,
  HYDRATE_STATE
}
