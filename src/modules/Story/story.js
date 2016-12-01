require('es6-promise').polyfill()
require('isomorphic-fetch')

// ------------------------------------
// Constants
// ------------------------------------

export const LOAD_STORY = 'LOAD_STORY'

// ------------------------------------
// Actions
// ------------------------------------
/**
 * @param {Object} story
 * @return {Object}
 */
export function loadStory (story) {
  return {
    type    : LOAD_STORY,
    payload : story
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */
/**
 * async: Fetches a single story
 * dispatches LOAD_STORY action on complete
 * @return {Promise}
 */
export function fetchStory (uuid) {
  return (dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${encodeURIComponent(uuid)}`)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(story => dispatch(loadStory(story)))
  }
}

export const actions = {
  fetchStory
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_STORY] : (state, action) => {
    return {
      ...state,
      story : action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  story : {}
}
export default function storyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
