import {
  URL_DID_CHANGE,
  POSTS_ARE_LOADING,
  POSTS_DID_LOAD,
  HYDRATE_STATE
} from './actions'

function reducer (state, action) {
  switch (action.type) {
    case HYDRATE_STATE:
      return {
        ...state,
        ...action.payload
      }
    case URL_DID_CHANGE:
      return {
        ...state,
        url: action.payload
      }
    case POSTS_ARE_LOADING:
      return {
        ...state,
        postsAreLoading: true
      }
    case POSTS_DID_LOAD:
      return {
        ...state,
        posts: action.payload,
        postsAreLoading: false
      }
  }
  return state
}

export default reducer
