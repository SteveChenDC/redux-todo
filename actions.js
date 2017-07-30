/*
* action types
*/

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBLITY_FILTER = 'SET_VISIBLITY_FILTER'
/*
* other constants
*/

export const VisiblityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
* action Creators
*/

export function addTodo(text) {
  return { type: ADD_TODO, text}
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBLITY_FILTER, filter }
}
