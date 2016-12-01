require('es6-promise').polyfill()
require('isomorphic-fetch')

// ------------------------------------
// Constants
// ------------------------------------

export const LOAD_TOP_STORIES = 'LOAD_TOP_STORIES'

// ------------------------------------
// Actions
// ------------------------------------
/**
 * @param {Object} topStories
 * @return {Object}
 */
export function loadTopStories (topStories) {
  return {
    type    : LOAD_TOP_STORIES,
    payload : topStories
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */
/**
 * async: Fetches the top stories
 * dispatches LOAD_TOP_STORIES action on complete
 * @return {Promise}
 */
export function fetchTopStories (uuid) {
  return (dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(stories => dispatch(loadTopStories(stories)))
  }
}

export const actions = {
  fetchTopStories
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_TOP_STORIES] : (state, action) => {
    return {
      ...state,
      topStories : action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  topStories : {}
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
